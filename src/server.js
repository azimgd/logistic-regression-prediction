import express from 'express';
import * as index from './controllers/index';

/**
 * Implementation of server object
 */
export const serverImpl = (server, controllers) => ({
  initRoutes: () => {
    server.get('/', controllers.getIndex);
    server.post('/', controllers.postIndex);
  },

  start: (port) => {
    server.listen(port);
  },
});

/**
 * Server provider could use other instances as well.
 */
export const serverProvider = () => {
  const expressServer = serverImpl(express(), index);
  return { ...expressServer };
};

export default serverProvider;
