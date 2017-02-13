import Big from 'big.js';

export const isValidNumber = number => !isNaN(parseFloat(number)) && isFinite(number);
export const numberSum = (first, second) => (new Big(first)).plus(second).toFixed(16);
export const numberDiv = (first, second) => (new Big(first)).div(second).toFixed(16);

/**
 * Sums all incoming coefficients
 */
export const _sumCoefficients = (isNumeric, sumNumbers) => (bias, ...coeff) => {
  if (!isNumeric(bias)) { throw new Error('Bias must be a number'); }
  return coeff.filter(isNumeric)
  .reduce(sumNumbers, bias);
};
export const sumCoefficients = _sumCoefficients(isValidNumber, numberSum);

/**
 * Logistic function implementation
 */
export const _logisticFunction = (isNumeric, sumNumbers, divideNumbers) => (coeffSum) => {
  if (!isNumeric(coeffSum)) { throw new Error('Coefficient sum must be a number'); }
  return divideNumbers(Math.exp(coeffSum), sumNumbers(Math.exp(coeffSum), 1));
};
export const logisticFunction = _logisticFunction(isValidNumber, numberSum, numberDiv);
