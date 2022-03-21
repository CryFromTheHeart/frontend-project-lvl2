import genDiff from '../genDiff.js';
import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

const getDifference = (pathFile1, pathFile2, format = 'stylish') => {
  const difference = genDiff(pathFile1, pathFile2);
  if (format === 'stylish') {
    return getStylish(difference);
  }
  if (format === 'plain') {
    return getPlain(difference);
  }
  if (format === 'json') {
    return getJson(difference);
  }
  return 'qwe123';
};

export default getDifference;
