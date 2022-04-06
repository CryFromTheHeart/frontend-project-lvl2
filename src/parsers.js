import yaml from 'js-yaml';

const parse = (file, format) => {
  switch (format) {
    case 'yml':
      return yaml.load(file, 'utf8');
    case 'yaml':
      return yaml.load(file, 'utf8');
    case 'json':
      return JSON.parse(file);
    default:
      throw new Error('format is not support');
  }
};

export default parse;
