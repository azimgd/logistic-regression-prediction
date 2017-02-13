import expect from 'expect.js';
import { serverImpl, serverProvider } from '../src/server';

describe('Validate server provider contracts', () => {
  it('server implementation contracts', () => {
    expect(serverImpl).to.be.a('function');
    const instance = serverImpl();
    expect(instance.initRoutes).to.be.a('function');
    expect(instance.start).to.be.a('function');
  });

  it('server provider contracts', () => {
    expect(serverProvider).to.be.a('function');
  });
});
