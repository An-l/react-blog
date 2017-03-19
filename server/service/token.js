const jwt = require('jsonwebtoken')
const config = require('../conf/config')

let secret = config.tokenSecret; //获取config中创建token的私钥
 
let expiresIn = config.tokenExpiresIn; //获取config中创建token的时间期限

module.exports = {
    // 创建token
    createToken(userinfo) {
        let token = jwt.sign(userinfo, secret, {
            expiresIn,
        });
        return token;
    },
    // 验证token
    verifyToken(token) {
        if (!token) {
            return false;
        }

        try{
            let result = jwt.verify(token, secret); //根据从客户端传入的token和私钥验证
            return result;
        }catch(err){
            return false;
        }
    },

    expiresIn,
}