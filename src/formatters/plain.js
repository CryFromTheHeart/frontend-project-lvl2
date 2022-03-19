import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return `${value}`;
};
const getFormat = (difference) => {
  const iter = (diff, path) => {
    const result = [];
    diff.forEach((keyInfo) => {
      const { type, key } = keyInfo;
      switch (type) {
        case 'add':
          result.push(`Property '${path ? `${path}.${key}` : key}' was added with value: ${getValue(keyInfo.value)}`);
          break;
        case 'remove':
          result.push(`Property '${path ? `${path}.${key}` : key}' was removed`);
          break;
        case 'update':
          result.push(`Property '${path ? `${path}.${key}` : key}' was updated. From ${getValue(keyInfo.valueOld)} to ${getValue(keyInfo.valueNew)}`);
          break;
        case 'nothing':
          break;
        case 'rec':
          result.push(iter(keyInfo.value, path ? `${path}.${key}` : key));
          break;
        default:
          throw new Error('mission failed');
      }
    });
    return result.join('\n');
  };
  return iter(difference, '');
};

export default getFormat;
