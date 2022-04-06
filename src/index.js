import choseFormat from "./formatters/index.js"
import buildTree from "./buildTree.js"
import path from 'path';
import fs from 'fs';
import parse from "./parsers.js"

const readFile = (filePath) => fs.readFileSync(filePath);
const getFormat = (file) => path.extname(file).slice(1);

const getStart = (pathFile1, pathFile2, format = "stylish") => {
  const format1 = getFormat(pathFile1);
  const format2 = getFormat(pathFile2);

  const data1 = parse(readFile(pathFile1), format1);
  const data2 = parse(readFile(pathFile2), format2);

  const tree = buildTree(data1, data2);
  return choseFormat(tree, format);
};

export default getStart;

