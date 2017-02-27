/**
 * 设置路由
 * 1.user请求 or 其他请求
 * 2.post，delete，put，path请求
 * 
 * @param {obj} app koa的app对象
 * @param {obj} router koa-router的router对象
 * @param {any} modelName 传入的model名字
 * @param {obj} actions model的方法对象
 * @param {string} prefix 请求前缀
 * @param {any} permission 权限判断标志
 */
module.exports = function generateRoutes(app, router, modelName, actions, prefix, permission) {
    if (modelName !== 'user') {
        // 如果不是对user数据的请求，则采用下面的路由
        // 可以直接访问
        router.get(prefix + ('/' + modelName), actions.findAll);
        router.get(prefix + ('/' + modelName + '/:id'), actions.findById);
    } else {
        // 如果是对user数据的请求，则采用下面的路由
        // 对permission参数进行判断，是否有权限访问
        router.get(prefix + ('/' + modelName), permission, actions.findAll);
        router.get(prefix + ('/' + modelName + '/:id'), permission, actions.findById);
    }

    // post请求，访问prefix/modelName 提交 创建 请求
    router.post(prefix + ('/' + modelName), permission, actions.create);
    // post请求，访问prefix/modelName/:id 提交 更新 请求
    router.post(prefix + ('/' + modelName + '/:id'), permission, actions.updateById);

    // del请求，访问prefix/modelName/:id 提交 删除 请求
    router.del(prefix + ('/' + modelName + '/:id'), permission, actions.deleteById);

    // put请求，访问prefix/modelName 提交 创建 请求
    router.put(prefix + ('/' + modelName), permission, actions.create);
    // put请求，访问prefix/modelName/:id 提交 覆盖 请求
    router.put(prefix + ('/' + modelName + '/:id'), permission, actions.replaceById);

    // patch请求，访问prefix/modelName/:id 提交 更新 请求
    router.patch(prefix + ("/" + modelName + "/:id"), permission, actions.updateById);

    app.use(router.routes());
}