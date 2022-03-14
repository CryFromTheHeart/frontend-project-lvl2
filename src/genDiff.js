import _ from 'lodash';
import parse from './parsers.js';

const getRemoveString = (key, value) => `  - ${key}: ${value}`;
const getAddString = (key, value) => `  + ${key}: ${value}`;

const getKeys = (jsonFile) => Object.keys(jsonFile);

const genDiff = (file1, file2) => {
  const jsonFile1 = parse(file1);
  const jsonFile2 = parse(file2);

  const keysFile1 = getKeys(jsonFile1);
  const keysFile2 = getKeys(jsonFile2);
  const keys = _.union(keysFile1, keysFile2);
  const sortedKeys = _.sortBy(keys);

  const lines = sortedKeys.map((key) => {
    if (keysFile1.includes(key) && !keysFile2.includes(key)) {
      return getRemoveString(key, jsonFile1[key]);
    }
    if (!keysFile1.includes(key) && keysFile2.includes(key)) {
      return getAddString(key, jsonFile2[key]);
    }
    if (keysFile1.includes(key) && keysFile2.includes(key) && jsonFile1[key] !== jsonFile2[key]) {
      return `${getRemoveString(key, jsonFile1[key])}\n${getAddString(key, jsonFile2[key])}`;
    }

    return `    ${key}: ${jsonFile1[key]}`;
  });
  return ['{', ...lines, '}'].join('\n');
};
export default genDiff;
