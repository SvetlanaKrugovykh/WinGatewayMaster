const ollamaService = require('../services/ollamaService')

module.exports = async function (request, reply) {
  const { method, url, body, headers } = request
  const proxyUrl = (url === '/' ? '/api/generate' : url)
  const result = await ollamaService({ method, url: proxyUrl, body, headers })
  reply.code(result.status).send(result.data)
}
