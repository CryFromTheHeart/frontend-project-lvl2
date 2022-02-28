const { readFileSync } = require('fs');
const _ = require('lodash');
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
      result = `${result}\t- ${key}: ${jsonFile1[key]}\n`;
    }
    else if (!keysFile1.includes(key) && keysFile2.includes(key)) {
      result = `${result}\t+ ${key}: ${jsonFile2[key]}\n`;
    }
    else if (keysFile1.includes(key) && keysFile2.includes(key) && jsonFile1[key] !== jsonFile2[key]) {
      result = `${result}\t- ${key}: ${jsonFile1[key]}\n\t+ ${key}: ${jsonFile2[key]}\n`;
    }
    else {
      result = `${result}\t  ${key}: ${jsonFile1[key]}\n`;
    }
  }
  console.log(`{\n${result}\n}`);
}
module.exports = {
  genDiff
}
