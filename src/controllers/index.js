import { sumCoefficients, logisticFunction } from '../services/logistic';

/**
 * Receives a json object. Modifies each key-item pair into redis suitable key
 * e.g. {"deviceExtBrowser": "Firefox"} => [`deviceExtBrowser=Firefox`]
 * Fetches model bias first, then available sample data and applies
 * logistic function to predict ctr for request.
 */
const calculateCtr = (dataSource, sampleRequest) => {
  if (sampleRequest === null || typeof sampleRequest !== 'object') {
    throw new Error('Invalid sample data');
  }

  const tranformedRequest = Object.keys(sampleRequest)
    .map(item => `${item}=${sampleRequest[item]}`);

  const coefficientsPromise = ['bias', ...tranformedRequest]
    .map(item => dataSource.getCoefficient(item));

  return Promise.all(coefficientsPromise)
    .then(source => source.map(parseFloat))
    .then(coefficients => sumCoefficients(...coefficients))
    .then(logisticFunction);
};

export const postIndex = (dataSource, req, res) => {
  calculateCtr(dataSource, req.body)
    .then(res.json.bind(res))
    .catch(res.status(500).send.bind(res));
};

export const getIndex = () => {

};

export default dataSource => ({
  getIndex: getIndex.bind(null, dataSource),
  postIndex: postIndex.bind(null, dataSource),
});
