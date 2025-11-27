require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const proxyRoutes = require('./src/routes/proxyRoutes');

fastify.register(proxyRoutes);

const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

fastify.listen({ port, host }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`Server listening at ${address}`);
});
