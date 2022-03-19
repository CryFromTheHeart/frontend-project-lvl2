import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';
import genDiff from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff beetwen nested Json files', async () => {
  const result = await readFile('resultStylish.txt').trim();
  expect(genDiff(getFixturePath('nestedFile1.json'), getFixturePath('nestedFile2.yaml'), 'stylish')).toBe(result);
});
test('getDiff beetwen nested Json files with plain format', async () => {
  const result = await readFile('resultPlain.txt').trim();
  expect(genDiff(getFixturePath('nestedFile1.json'), getFixturePath('nestedFile2.json'), 'plain')).toBe(result);
});
