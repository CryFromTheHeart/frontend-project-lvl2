import yaml from 'js-yaml';

const parse = (data, format) => {
  switch (format) {
    case 'yml':
      return yaml.load(data, 'utf8');
    case 'yaml':
      return yaml.load(data, 'utf8');
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error('format is not support');
  }
};

export default parse;
