// Initializes the `agents` service on path `/agents`
const createService = require('feathers-nedb');
const createModel = require('../../models/agents.model');
const hooks = require('./agents.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/agents', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('agents');

  service.hooks(hooks);
};
