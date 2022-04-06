import _ from 'lodash';

const getKeys = (obj) => Object.keys(obj);

const buildTree = (data1, data2) => {
  const keys1 = getKeys(data1);
  const keys2 = getKeys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const difference = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data2, key)) {
      return { type: 'remove', key, value: value1 };
    }
    if (!_.has(data1, key)) {
      return { type: 'add', key, value: value2 };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'rec', key, value: buildTree(value1, value2) };
    }
    if (_.isEqual(value1, value2)) {
      return { type: 'nothing', key, value: value1 };
    }
    return {
      type: 'update', key, valueOld: value1, valueNew: value2,
    };
  });
  return difference;
};

export default buildTree;
