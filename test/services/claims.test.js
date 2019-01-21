const assert = require('assert');
const app = require('../../src/app');

describe('\'claims\' service', () => {
  it('registered the service', () => {
    const service = app.service('claims');

    assert.ok(service, 'Registered the service');
  });
});
