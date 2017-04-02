const tag = require('../models/db').tag;
const log = require('../utils/log');
// 对models/db.js中发布的mongoose模型进行添加方法
module.exports = function generateActions(model) {
    return {
        
        /**
         * 对models/db.js中发布的mongoose模型进行添加方法
         * 
         * 提供关键字：conditions, like, select, count, sort, skip, limit
         * 查询所有文档  GET /proxyPrefix/api/post
         * 查询title字段为'关于'的文档  GET /proxyPrefix/api/post?conditions={"title":"关于"}
         * 查询指定id的文档的上一篇文档  GET /proxyPrefix/api/post/?conditions={"_id":{"$lt":"580b3ff504f59b4cc27845f0"}}&sort=1&limit=1
         * 查询title字段为'关于'的文档的建立时间和更新时间  GET /proxyPrefix/api/post?conditions={"title":"关于"}&select={"createdAt":1,"updatedAt":1}
         * 查询文档的数量 GET /proxyPrefix/api/post?conditions={"type":0}&count=1
         * sort查询 GET /proxyPrefix/api/post?sort=1
         * 查询第2页的文档(每页10条)并按时间倒叙 GET /proxyPrefix/api/post?limit=10&skip=10&sort=1
         * @param {obj} ctx 
         * @param {obj} next 
         * @returns 返回查询结果
         */
        findAll: async function(ctx, next) {
            let error, result;
            try {
                let conditions = {}, // 条件
                    like = {}, // 模糊查询
                    select = {}; // 过滤，在条件基础上进行过滤

                let query = ctx.request.query;
                if (query.conditions) {
                    // 如果请求中包含conditions字段
                    conditions = JSON.parse(query.conditions);
                }

                if (query.like) {
                    let title = JSON.parse(query.like)['title'];
                    like['title'] = new RegExp(title, 'i');
                    conditions = like;
                }

                // 根据传入的model(post,user,tag,category),
                // 直接使用find()从mongodb中找到数据,
                // 返回一个query对象类型数据
                var builder = model.find(conditions);
                
                if (query.select) {
                     // 如果请求中包含select字段，对builder的结果进行过滤
                    select = JSON.parse(query.select);
                    builder = builder.select(select);
                }

                ['limit', 'skip', 'sort', 'count'].forEach((key) => {
                    if(query[key]) {
                         // 如果请求中包含以上其中一个字段
                        let arg = query[key];

                        if (key === 'limit' || key === 'skip') {
                            arg = parseInt(arg);
                        }
                        if (key === 'sort') {
                            // sort=1代表按时间(_id)倒序, 不使用sort则代表按时间(_id)正序
                            arg = {'_id': 'desc'}; 
                        }
                        if (key !== 'count') {
                            builder[key](arg); // 处理后，就像builder.limit(arg)
                        } else {
                            builder[key](); // builder.count()
                        }
                    }
                })

                // 等待异步查询结束，并返回给客户端
                result = await builder.exec();
                
                return ctx.body = result;
            } catch (_error) {
                error = _error;
                return ctx.body = error;
            }
        },

        // 根据id查询
        findById: async function (ctx, next) {
            let error, result;
            try {
                let select = {};
                let query = ctx.request.query;

                let builder = model.findById(ctx.params.id);
                if (query.select) {
                    select = JSON.parse(query.select);
                    builder = builder.select(select);
                }
                result = await builder.exec();
                
                return ctx.body = result;
            } catch (_error) {
                error = _error;
                return ctx.body = error;
            }
        },
        // 根据id删除
        // DELETE https://localhost:8000/proxyPrefix/api/:modelName/:id
        deleteById: async function (ctx, next) {
             let error, result;

              try {
                result = await model.findByIdAndRemove(ctx.params.id);
                return ctx.body = result;
            } catch (_error) {
                error = _error;
                return ctx.body = error;
            }
        },
        // 根据id替换
        // PUT /proxyPrefix/api/:modelName/:id
        // :id为查询到的文档的_id属性, Body中为用来替换该文档的JSON数据
        replaceById: async function (ctx, next) {
             let error, result, newDocument;

              try {
                // 1.根据id对已存在数据进行删除
                await model.findByIdAndRemove(ctx.params.id);
                // 2.保持之前的id不变，将新的数据插入数据库
                newDocument = ctx.request.body;
                newDocument._id = ctx.params.id;
                result = await model.create(newDocument);

                return ctx.body = result;
            } catch (_error) {
                error = _error;
                return ctx.body = error;
            }
        },
         // 根据id更新
         // PATCH /proxyPrefix/api/:modelName/:id
         // :id为查询到的文档的_id属性, Body中为用来更新该文档的JSON数据
        updateById: async function (ctx, next) {
             let error, result;
             
              try {
                result = await model.findByIdAndUpdate(ctx.params.id, ctx.request.body).exec();
                console.log(result);
                ctx.status = 200; // 201 "created"
                return ctx.body = result;
            } catch (_error) {
                error = _error;
                return ctx.body = error;
            }
        },
        // 插入数据库
        // POST /proxyPrefix/api/:modelName
        create: async function (ctx, next) {
             let error, result;
             
              try {
                result = await model.create(ctx.request.body);
               
                ctx.status = 201; // 201 "created"
                return ctx.body = result;
            } catch (_error) {
                error = _error;
                return ctx.body = error;
            }
        }
    }
}