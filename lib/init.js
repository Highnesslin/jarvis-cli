const { promisify } = require('util');
const { clone } = require('./download');
const figlet = promisify(require('figlet'));
const clear = require('clear'); // 清空命令行
const chalk = require('chalk'); // 带颜色的命令行

const log = (content, color = 'green') => console.log(chalk[color](content) + '\n');

module.exports = async name => {
  // 打印欢迎界面
  clear();
  const data = await figlet('J A R V I S');
  log(data);

  // clone
  log(`🚀正在创建项目：${name}`);
  // await clone('github:Highnesslin/template-cra', name);
  await clone('github:Highnesslin/template-cra', name);
  //
  log(`🚀项目${name}创建完毕`);
  log(
    chalk.green(`
👌安装完成：
运行项目请按照如下方式
===========================
cd ${name}
yarn 
yarn start
===========================
启动项目
`)
  );
};
