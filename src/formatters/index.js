import getStylish from './stylish.js';
import getPlain from './plain.js';

const getDifference = (difference, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(difference);
    case 'plain':
      return getPlain(difference);
    case 'json':
      return JSON.stringify(difference);
    default:
      throw new Error('format doesnt support');
  }
};

export default getDifference;
