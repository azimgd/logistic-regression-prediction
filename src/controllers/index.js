import { sumCoefficients, logisticFunction } from '../services/logistic';

export const getIndex = (dataSource, req, res) => {
  Promise.all([
    dataSource.getCoefficient('bias'),
    dataSource.getCoefficient('deviceExtBrowser=Firefox'),
    dataSource.getCoefficient('bannerExtSize=300x250'),
    dataSource.getCoefficient('deviceLanguage=de'),
    dataSource.getCoefficient('deviceExtType=tablet'),
  ])
  .then(source => source.map(parseFloat))
  .then(coefficients => sumCoefficients(...coefficients))
  .then(logisticFunction)
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
};

export const postIndex = () => {

};

export default dataSource => ({
  getIndex: getIndex.bind(null, dataSource),
  postIndex: postIndex.bind(null, dataSource),
});
