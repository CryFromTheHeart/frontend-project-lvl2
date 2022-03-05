import { program } from 'commander';

import genDiff from '../src/genDiff.js';

program.version('1.0.0');

program
  .option('-f, --format <type>', 'output format');

program
  .command('gen <pathfile1> <pathfile2>')
  .alias('g')
  .action((pathfile1, pathfile2) => {
    genDiff(pathfile1, pathfile2);
  });

program.parse(process.argv);
