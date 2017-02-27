const fs = require('fs');
const Koa = require('koa');
const log = require('./utils/log');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('koa-router');
const models = require('./models/db'); // mongodb的models
const koa2RestMongoose = require('./mongo_rest/index');
const { permission } = require('./routes/admin');
const config = require('./conf/config'); // 设置文件
const restc = require('restc');


const app = new Koa();
const router = koaRouter();
// const controller = require('./controller');

// 此处开始堆叠各种中间件
//...
app.use(bodyParser());
app.use(restc.koa2());
// app.use(controller());

app.use(async (ctx, next) => {
  const start = new Date();
    await next();
    const ms = new Date() - start;
    log.info(`${ctx.method} ${decodeURIComponent(ctx.url)} - ${ms}ms`);
});

// 调用mongo_reset
Object.keys(models).forEach(value => {
  koa2RestMongoose(app, router, models[value], '/api', permission);
});

app.listen(3000);
log.debug('koa2 started at port 3000...');
