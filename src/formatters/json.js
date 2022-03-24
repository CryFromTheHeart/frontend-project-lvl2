import _ from 'lodash';
/*
const getJson = (diff) => {
  const iter = (difference) => {
    const result = difference.map((keyInfo) => {
      const { type, key } = keyInfo;
      switch (type) {
        case 'add':
          return `{"key":"${key}","type":"add","value":${JSON.stringify(keyInfo.value)}}`;
        case 'remove':
          return `{"key":"${key}","type":"remove","value":${JSON.stringify(keyInfo.value)}}`;
        case 'nothing':
          return `{"key":"${key}","type":"no-change","value":${JSON.stringify(keyInfo.value)}}`;
        case 'update':
          return `{"key":"${key}","type":"updated","valueOld":${JSON.stringify(keyInfo.valueOld)},"valueNew":${JSON.stringify(keyInfo.valueNew)}}`;
        case 'rec':
          return `{"key":"${key}","type":"no-change","value":[${iter(keyInfo.value)}]}`;
        default:
          throw new Error('failed');
      }
    });
    return `${result.join(',')}`;
  };
  return `[${iter(diff)}]`;
};
*/

const getJson = (diff) => {
  return JSON.stringify(diff);
};

export default getJson;
