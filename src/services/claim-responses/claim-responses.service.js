// Initializes the `claim-responses` service on path `/responses`
const createService = require('feathers-nedb');
const createModel = require('../../models/claim-responses.model');
const hooks = require('./claim-responses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/responses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('responses');

  service.hooks(hooks);
};
