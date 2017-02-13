import { sumCoefficients, logisticFunction } from '../services/logistic';

export const postIndex = (dataSource, req, res) => {
  const tranformedRequest = Object.keys(req.body)
    .map(item => `${item}=${req.body[item]}`);

  const coefficientsPromise = ['bias', ...tranformedRequest]
    .map(item => dataSource.getCoefficient(item));

  Promise.all(coefficientsPromise)
  .then(source => source.map(parseFloat))
  .then(coefficients => sumCoefficients(...coefficients))
  .then(logisticFunction)
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
};

export const getIndex = () => {

};

export default dataSource => ({
  getIndex: getIndex.bind(null, dataSource),
  postIndex: postIndex.bind(null, dataSource),
});
