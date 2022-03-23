import _ from 'lodash';

const getStrObj = (value) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const result = Object
    .entries(value)
    .map(([key, val]) => `"${key}":${getStrObj(val)}`);
  return `{${result.join(',')}}`;
};

const getJson = (diff) => {
  const iter = (difference) => {
    const result = difference.map((keyInfo) => {
      const { type, key } = keyInfo;
      switch (type) {
        case 'add':
          return `{"key":"${key}","type":"add","value":${JSON.stringify(keyInfo.value)}`;
        case 'remove':
          return `{"key":"${key}","type":"remove","value":${JSON.stringify(keyInfo.value)}}`;
        case 'nothing':
          return `{"key":"${key}","type":"no-change","value":${JSON.stringify(keyInfo.value)}}`;
        case 'update':
          return `{"key":"${key}","type":"updated","value":[${JSON.stringify(keyInfo.valueOld)},${JSON.stringify(keyInfo.valueNew)}]}`;
        case 'rec':
          return `{"key":"${key}","type":"no-change","value":${iter(keyInfo.value)}}`;
        default:
          throw new Error('failed');
      }
    });
    return `${result.join(',')}`;
  };
  return `[${iter(diff)}]`;
};

export default getJson;
