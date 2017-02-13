import express from 'express';
import bluebird from 'bluebird';
import redis from 'redis';
import indexController from './controllers/index';
import indexSelector from './selectors/index';

/**
 * Implementation of server object
 */
export const serverImpl = (server, redisServer, controllers) => ({
  initRoutes: (dataSource) => {
    const func = controllers(dataSource);
    server.get('/', func.getIndex);
    server.post('/', func.postIndex);
  },

  start: (port) => {
    const redisClient = redisServer.createClient();
    server.listen(port);
    return { redisClient };
  },
});

/**
 * Server provider could use other instances as well.
 */
export const serverProvider = (port) => {
  bluebird.promisifyAll(redis.RedisClient.prototype);
  bluebird.promisifyAll(redis.Multi.prototype);
  const expressServer = serverImpl(express(), redis, indexController);
  const { redisClient } = expressServer.start(port);
  const dataSource = indexSelector(redisClient);
  expressServer.initRoutes(dataSource);
  return {};
};

export default serverProvider;
