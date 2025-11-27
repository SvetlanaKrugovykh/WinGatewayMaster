const ollamaService = require('../services/ollamaService');

module.exports = async function (request, reply) {
  const { method, url, body, headers } = request;
  const result = await ollamaService({ method, url, body, headers });
  reply.code(result.status).send(result.data);
};
