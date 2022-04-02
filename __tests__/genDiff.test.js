import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff beetwen files (format \'stylish\')', async () => {
  const result = await readFile('resultStylish.txt').trim();
  expect(genDiff(getFixturePath('nestedFile1.json'), getFixturePath('nestedFile2.yaml'), 'stylish')).toBe(result);
});
test('getDiff beetwen nested files (format \'plain\')', async () => {
  const result = await readFile('resultPlain.txt').trim();
  expect(genDiff(getFixturePath('nestedFile1.json'), getFixturePath('nestedFile2.yaml'), 'plain')).toBe(result);
});
test('getDiff beetwen nested files (format \'json\')', async () => {
  const result = await readFile('resultJson.txt').trim();
  expect(genDiff(getFixturePath('nestedFile1.json'), getFixturePath('nestedFile2.yaml'), 'json')).toBe(result);
});
