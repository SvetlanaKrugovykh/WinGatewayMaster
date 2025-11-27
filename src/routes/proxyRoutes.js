const proxyController = require('../controllers/proxyController');

module.exports = function (fastify, opts, done) {
  fastify.all('/*', proxyController);
  done();
};
