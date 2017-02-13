import express from 'express';
import bluebird from 'bluebird';
import redis from 'redis';
import bodyParser from 'body-parser';
import indexController from './controllers/index';
import indexSelector from './selectors/index';

// redis client specific transform
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

/**
 * Implementation of server object
 */
export const serverImpl = (server, redisServer, controllers) => ({
  initRoutes: (dataSource) => {
    const func = controllers(dataSource);
    server.get('/', func.getIndex);
    server.post('/', func.postIndex);
  },

  start: (expressBodyParser, port) => {
    const redisClient = redisServer.createClient();
    server.use(expressBodyParser.json());
    server.listen(port);
    return { redisClient };
  },
});

/**
 * Server provider could use other instances as well.
 */
export const serverProvider = (port) => {
  const app = express();
  const expressServer = serverImpl(app, redis, indexController);
  const { redisClient } = expressServer.start(bodyParser, port);
  const dataSource = indexSelector(redisClient);
  expressServer.initRoutes(dataSource);
  console.log('server is running on port:', port);
  return {};
};

export default serverProvider;
