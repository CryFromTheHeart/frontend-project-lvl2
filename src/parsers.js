import yaml from 'js-yaml';
import fs from 'fs';

const parseJson = (file) => JSON.parse(file);
const parseYaml = (file) => yaml.load(file, 'utf8');

const parse = (file, format) => {
  switch (format) {
    case 'yml':
      return parseYaml(file);
    case 'yaml':
      return parseYaml(file);
    case'json':
      return parseJson(file);
    default:
      throw new Error('format is not support');
  }
};

export default parse;
