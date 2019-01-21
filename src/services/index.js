const claims = require('./claims/claims.service.js');
const claimResponses = require('./claim-responses/claim-responses.service.js');
const agents = require('./agents/agents.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(claims);
  app.configure(claimResponses);
  app.configure(agents);
};
