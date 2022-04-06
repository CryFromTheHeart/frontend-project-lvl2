import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import parse from './parsers.js';

const getKeys = (obj) => Object.keys(obj);

const buildTree = (data1, data2) => {
  const iter = (coll1, coll2) => {
    const keys1 = getKeys(coll1);
    const keys2 = getKeys(coll2);
    const keys = _.union(keys1, keys2);
    const sortedKeys = _.sortBy(keys);

    const difference = sortedKeys.map((key) => {
      const value1 = coll1[key];
      const value2 = coll2[key];

      if (!_.has(coll2, key)) {
        return { type: 'remove', key, value: value1 };
      }
      if (!_.has(coll1, key)) {
        return { type: 'add', key, value: value2 };
      }
      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return { type: 'rec', key, value: iter(value1, value2) };
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
  return iter(data1, data2);
};

export default buildTree;
