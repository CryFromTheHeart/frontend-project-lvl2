import { readFileSync } from 'fs';
import _ from 'lodash';
const parse = (file) => JSON.parse(readFileSync(file));

const getKeys = (jsonFile) => Object.keys(jsonFile);

const genDiff = (file1, file2) => {
  let result = '';
  const jsonFile1 = parse(file1);
  const jsonFile2 = parse(file2);
  
  const keysFile1 = getKeys(jsonFile1);
  const keysFile2 = getKeys(jsonFile2);
  const keys = _.union(keysFile1, keysFile2);
  const sortedKeys = _.sortBy(keys);
  
  
  for (const key of sortedKeys) {
    if (keysFile1.includes(key) && !keysFile2.includes(key)) {
      result = `${result}  - ${key}: ${jsonFile1[key]}\n`;
    }
    else if (!keysFile1.includes(key) && keysFile2.includes(key)) {
      result = `${result}  + ${key}: ${jsonFile2[key]}\n`;
    }
    else if (keysFile1.includes(key) && keysFile2.includes(key) && jsonFile1[key] !== jsonFile2[key]) {
      result = `${result}  - ${key}: ${jsonFile1[key]}\n  + ${key}: ${jsonFile2[key]}\n`;
    }
    else {
      result = `${result}    ${key}: ${jsonFile1[key]}\n`;
    }
  }
  return (`{\n${result}}`);
}
export default genDiff;
