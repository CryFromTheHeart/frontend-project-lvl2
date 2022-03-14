import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const parseJson = (file) => JSON.parse(fs.readFileSync(file));
const parseYaml = (filePath) => yaml.load(fs.readFileSync(filePath, 'utf8'));

const getParse = (filePath) => {
  const extName = path.extname(filePath);

  if (extName === '.yml' || extName === '.yaml') {
    return parseYaml(filePath);
  }
  if (extName === '.json') {
    return parseJson(filePath);
  }

  throw new Error('operation is not supported');
};

export default getParse;
