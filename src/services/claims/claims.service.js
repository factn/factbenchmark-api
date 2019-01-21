// Initializes the `claims` service on path `/claims`
const createService = require('feathers-nedb');
const createModel = require('../../models/claims.model');
const hooks = require('./claims.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/claims', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('claims');

  service.hooks(hooks);
};
