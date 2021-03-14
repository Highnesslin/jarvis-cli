#! /usr/bin/env node
// ⬆️ 声明解释器类型，这是js，需要用node执行

const program = require('commander');

// -V 命令
program.version(require('../package').version);

// init 命令
program.command('init <name>').description('init project').action(require('../lib/init'));

// 解析命令行的参数，process.argv是一个数组
program.parse(process.argv);
