const fs = require('fs');
const Koa = require('koa');
const cors = require('kcors'); //koa跨域中间件
const log = require('./utils/log');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('koa-router');
const restc = require('restc');
const models = require('./models/db'); // mongodb的models
const redisClient = require('./models/redis');
const { login, logout, permission } = require('./routes/admin');
const tokenService = require('./service/token');
const koa2RestMongoose = require('./mongo_rest/index');
const config = require('./conf/config'); // 设置文件


const app = new Koa();
const router = koaRouter();
// const controller = require('./controller');

// 此处开始堆叠各种中间件
//...
app.use(bodyParser());
app.use(cors()); //跨域中间件
app.use(restc.koa2());
// app.use(controller());

app.use(async (ctx, next) => {
  const start = new Date();
    await next();
    const ms = new Date() - start;
    log.info(`${ctx.method} ${decodeURIComponent(ctx.url)} - ${ms}ms`);
});

// 路由
router.post('/api/admin/login', login);
router.get('/api/admin/logout', logout);

// 调用mongo_reset
Object.keys(models).forEach(value => {
  koa2RestMongoose(app, router, models[value], '/api', permission);
});

app.listen(3000);
log.debug('koa2 started at port 3000...');
