const { readFileSync } = require('fs');
const _ = require('lodash');
const parse = (file) => JSON.parse(readFileSync(file));

const getKeys = (jsonFile) => Object.keys(jsonFile);

const genDiff = (file1, file2) => {
  const jsonFile1 = parse(file1);
  const jsonFile2 = parse(file2);
  
  const keysFile1 = getKeys(jsonFile1);
  const keysFile2 = getKeys(jsonFile2);
  const keys = _.union(keysFile1, keysFile2);
  
  
  for (const key of keys) => {
    if (keysFile1.includes(key) && !keysFile2.includes(key)) {
      
    } 
  }
}
module.exports = {
  genDiff
}
