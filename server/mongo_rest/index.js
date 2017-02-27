const generateActions = require('./actions');
const generateRoutes = require('./routes');

module.exports = function generateRest(app, router, model, prefix = '', permission) {
    const actions = generateActions(model);
    
    generateRoutes(app, router, model.modelName, actions, prefix, permission);
}