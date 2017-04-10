const redisClient = require('../models/redis');
const tokenService = require('../service/token');
const {user: model} = require('../models/db');

// 登录
exports.login = async function (ctx, next) {
    var error, result;

    let users, user;

    try {
        // 根据传入的用户名从数据库中查询
        users = await model.find({
            name: ctx.request.body.name
        }).exec();
        
        user = {
            name: users[0].name,
            timestamp: (new Date()).valueOf(),
        };

        let password = users[0].password;

        // 根据查询结果比较输入密码
        if (password == ctx.request.body.password) {
            // 创建token字符串
            let token = tokenService.createToken(user);
            
            redisClient.set('token', token);
            redisClient.expire('token', tokenService.expiresIn);

            return ctx.body = {
                status: 'success',
                token: token
            };

        } else {
            // 如果密码错误
            return ctx.body = {
                status: 'fail',
                description: 'Get token failed.\n 密码错误.'
            };
        }

    } catch (_error) {
        // 如果捕捉到错误，说明数据库中不存在此用户名
        error = _error;
        return ctx.body = {
            status: 'fail',
            description: 'Get token failed.\n 用户名不存在.',
        };
    }

};

// 注销
exports.logout = async function (ctx, next) {
    const headers = ctx.request.headers;
    let token;
    try {
        token = headers['authorization'];
    } catch (err) {
        return ctx.body = {
            status: 'fail',
            description: err
        };
    }

    if (!token) {
        return ctx.body = {
            status: 'fail',
            description: 'Token not found'
        };
    }

    const result = tokenService.verifyToken(token);

    if (result == false) {
        return ctx.body = {
            status: 'fail',
            description: 'Token verify failed'
        };
    } else {
        await redisClient.del('token');
        return ctx.body = {
            status: 'success',
            description: 'Token deleted'
        };
    }

};

// 验证登录
exports.permission = async function (ctx, next) {
    const headers = ctx.request.headers;
    let token;
    try {
        token = headers['authorization'];
    } catch (err) {
        return ctx.body = {
            status: 'fail',
            description: err
        };
    }

    if (!token) {
        return ctx.body = {
            status: 'fail',
            description: 'Token not found'
        };

    }

    // 根据传入的token验证
    const result = tokenService.verifyToken(token);
    if (result == false) {
        return ctx.body = {
            status: 'fail',
            description: 'Token登录超时，请重新登录！'
        };
    }


    let reply = await redisClient.getAsync("token");

    if (reply === token) {
        return next();
    } else {

        return ctx.body = {
            status: 'fail',
            description: 'Token无效，请重新登录！'
        };
    }

}