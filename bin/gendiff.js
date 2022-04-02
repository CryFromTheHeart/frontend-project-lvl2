#!/usr/bin/env node

import { program } from 'commander';

import getFormat from '../src/index.js';

program.version('1.0.0');

program
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format (default: "stylish")', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(getFormat(filepath1, filepath2, program.opts().format));
  });

program.parse(process.argv);
