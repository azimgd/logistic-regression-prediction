import server from './server';

const serverInstance = server();

serverInstance.initRoutes();
serverInstance.start(3000);
