import genDiff from './genDiff.js';
import getStylish from './formatters/stylish.js';
import getPlain from './formatters/plain.js';

const getDifference = (pathFile1, pathFile2, format = 'stylish') => {
  const difference = genDiff(pathFile1, pathFile2);
  if (format === 'stylish') {
    return getStylish(difference);
  }
  if (format === 'plain') {
    return getPlain(difference);
  }
  if (format === 'json') {
    return JSON.stringify(difference);
  }
  return 'qwe123';
};

export default getDifference;
