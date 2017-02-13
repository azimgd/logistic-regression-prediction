import expect from 'expect.js';
import { app, init } from '../src/index';

describe('Array', () => {
  it('init function exists', () => {
    expect(app).to.be.a('function');
  });

  it('app function exists', () => {
    expect(init).to.be.a('function');
  });
});
