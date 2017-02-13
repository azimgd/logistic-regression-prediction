const getCoefficient = (dataSource, hashkey, hashvalue) =>
  dataSource.hgetAsync(hashkey, hashvalue);

export default dataSource => ({
  getCoefficient: getCoefficient.bind(null, dataSource, 'model'),
});
