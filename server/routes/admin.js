exports.permission = async function (ctx, next) {
    const headers = ctx.request.headers;
    let token;
    try {
        token = headers['authorization']
    } catch (error) {
        return ctx.body = {
            status: 'fail',
            description: error
        };
    }

    if (!token) {
        return ctx.body = {
            status: 'fail',
            description: 'Token not found'
        };
    }

    next();
}