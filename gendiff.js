import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .usage('[options]')
  .description('Compares two configuration files and shows a difference.')
  .version('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information');

program.parse(process.argv);