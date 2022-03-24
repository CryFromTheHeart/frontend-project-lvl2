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
    const result = diff.map((keyInfo) => {
      const { type, key } = keyInfo;
      switch (type) {
        case 'add':
          return (`Property '${path ? `${path}.${key}` : key}' was added with value: ${getValue(keyInfo.value)}`);
        case 'remove':
          return (`Property '${path ? `${path}.${key}` : key}' was removed`);
        case 'update':
          return (`Property '${path ? `${path}.${key}` : key}' was updated. From ${getValue(keyInfo.valueOld)} to ${getValue(keyInfo.valueNew)}`);
        case 'nothing':
          return null;
        case 'rec':
          return(iter(keyInfo.value, path ? `${path}.${key}` : key));
        default:
          throw new Error('mission failed');
      }
    });
    const filtredResult = result.filter((str) => str !== null);
    return filtredResult.join('\n');
  };
  return iter(difference, '');
};

export default getFormat;
