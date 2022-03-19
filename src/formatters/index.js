import genDiff from '../genDiff.js';
import getStylish from './stylish.js';
import getPlain from './plain.js';

const getDifference = (pathFile1, pathFile2, format) => {
  const difference = genDiff(pathFile1, pathFile2);
  if (format === 'stylish') {
    return getStylish(difference);
  }
  if (format === 'plain') {
    return getPlain(difference);
  }
  return 'qwe123';
};

export default getDifference;
