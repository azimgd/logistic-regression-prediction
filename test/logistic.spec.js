import expect from 'expect.js';
import sinon from 'sinon';
import * as logistic from '../src/services/logistic';

describe('Validate logistic function implementation', () => {
  it('checks numeric values', () => {
    expect(logistic.isValidNumber).to.be.a('function');
    expect(logistic.isValidNumber(undefined)).to.be(false);
    expect(logistic.isValidNumber('asd')).to.be(false);
    expect(logistic.isValidNumber(NaN)).to.be(false);
    expect(logistic.isValidNumber(123)).to.be(true);
    expect(logistic.isValidNumber(321.1)).to.be(true);
    expect(logistic.isValidNumber(0)).to.be(true);
  });

  describe('sums all input arguments', () => {
    const isNotNumberSpy = sinon.spy(() => false);
    const isNumberSpy = sinon.spy(() => true);
    const sumCoefficients = logistic._sumCoefficients(isNumberSpy, logistic.numberSum);
    const notSumCoefficients = logistic._sumCoefficients(isNotNumberSpy);

    it('has correct deps', () => {
      expect(notSumCoefficients.bind(null, 3)).to.throwError();
      expect(sumCoefficients).to.be.a('function');
      sumCoefficients(true);
      expect(isNumberSpy.calledOnce).to.be(true);
    });

    it('calculates correct number', () => {
      expect(sumCoefficients(123)).to.eql(123);
      // Javascript -> Error: expected 6.300000000000001 to equal 6.3
      expect(sumCoefficients(1.1, 2.1, 3.1)).to.eql(6.3);
    });
  });

  describe('calculates logistic function as euler exp', () => {
    const isNotNumberSpy = sinon.spy(() => false);
    const isNumberSpy = sinon.spy(() => true);
    const logisticFunction = logistic._logisticFunction(isNumberSpy, logistic.numberSum, logistic.numberDiv);
    const notLogisticFunction = logistic._logisticFunction(isNotNumberSpy);

    it('has correct deps', () => {
      expect(notLogisticFunction.bind(null, 3)).to.throwError();
      expect(logisticFunction).to.be.a('function');
      logisticFunction(true);
      expect(isNumberSpy.calledOnce).to.be(true);
    });

    it('calculates correct number', () => {
      expect(logisticFunction).to.be.a('function');
      expect(logisticFunction(4)).to.eql(0.9820137900379085);
      expect(logisticFunction(-6)).to.eql(0.0024726231566348);
    });
  });
});
