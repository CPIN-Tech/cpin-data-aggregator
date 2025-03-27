import type { FastifyPluginAsync, FastifyInstance } from 'fastify';

const routes: FastifyPluginAsync = async function (app: FastifyInstance) {
  app.get('/', async () => {
    return { server: 'CPIN API', version: 0.1 };
  });
};

export default routes;
