import genDiff from '../src/genDiff.js';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFile = (filename) => resolve(__dirname, '..', '__fixtures__/', filename);

test('main flow', () => {
  expect(genDiff(getFile('file1.json'), getFile('file2.json'))).toBe('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
  expect(genDiff(getFile('file1.yml'), getFile('file2.yml'))).toBe('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});
