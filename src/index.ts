import Fastify from 'fastify';
import FastifyPrintRoutes from 'fastify-print-routes';
import FastifySensible from '@fastify/sensible';
import Routes from './routes/index.js';
import { wait } from './utils';
import config from './config';
import cors from '@fastify/cors';
import { startSppUpdater } from './spp-updater/index.js';

startSppUpdater();

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        destination: 1,
        colorize: true,
        translateTime: 'HH:MM:ss.l',
        ignore: 'pid,hostname',
      },
    },
    level: 'warn',
  },
});

await fastify.register(FastifyPrintRoutes);
fastify.register(FastifySensible);
fastify.register(Routes);
fastify.register(cors, {
  origin: (origin: any, cb: any) => {
    cb(null, true);
    /*let hostname = '';
    try {
      hostname = new URL(origin || '').hostname;
    } catch (e) {}
    // console.log({ origin, hostname });
    if (hostname) {
      if (['localhost', 'app.cpin.tech'].includes(hostname)) {
        cb(null, true);
      } else {
        cb(new Error('Not allowed origin'), false);
      }
    } else {
      // if no origin, accept for now
      cb(null, true);
    }*/
  },
});

const start = async () => {
  try {
    await wait(400);
    console.log(config);
    await fastify.listen({ port: config.PORT, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
