import _ from 'lodash';

const getStrObj = (value) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const result = Object
    .entries(value)
    .map(([key, val]) => `"${key}":${getStrObj(val)}`);
  return ['{', ...result, '}'].join('');
};

const getJson = (diff) => {
  const iter = (difference) => {
    const result = difference.map((keyInfo) => {
      const { type, key } = keyInfo;
      switch (type) {
        case 'add':
          return `{"${key}":["add",${getStrObj(keyInfo.value)}]}`;
        case 'remove':
          return `{"${key}":["remove",${getStrObj(keyInfo.value)}]}`;
        case 'nothing':
          return `{"${key}":["no-change",${getStrObj(keyInfo.value)}]}`;
        case 'update':
          return `{"${key}":["updated",${getStrObj(keyInfo.valueOld)},${getStrObj(keyInfo.valueNew)}]}`;
        case 'rec':
          return `{"${key}":["no-change",${iter(keyInfo.value)}]}`;
        default:
          throw new Error('failed');
      }
    });
    return `${result.join(',')}`;
  };
  return `[${iter(diff)}]`;
};

export default getJson;
