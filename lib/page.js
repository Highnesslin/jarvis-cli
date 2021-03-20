const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const chalk = require('chalk');

module.exports = async pageName => {
  // 1. 创建文件夹
  fs.mkdir(`./src/${pageName}`, {}, err => {
    if (err) {
      console.log(chalk.redBright('【ERROR】:', '文件' + dir[err.code]));
      return;
    }

    // 2. 创建tsx文件
    const tsxResult = compile(__dirname, './template/page.tsx.hbs');
    fs.writeFileSync(`./src/${pageName}/${pageName}.tsx`, tsxResult);

    // 3. 创建less文件
    const lessResult = compile(__dirname, './template/page.module.less.hbs');
    fs.writeFileSync(`./src/${pageName}/${pageName}.module.less`, lessResult);

    // -1. 任务结束
    console.log(chalk.green(`🚀 页面:${pageName} 创建成功`));
  });

  /**
   * 生成模板编译后的文件
   * @param {*} dirPath
   * @param {*} templatePath
   */
  const compile = (dirPath, templatePath) => {
    const filePath = path.resolve(dirPath, templatePath);
    const fileContent = fs.readFileSync(filePath).toString();
    const fileResult = handlebars.compile(fileContent)({ pageName });
    return fileResult;
  };
};

// fs模块读取文件，发生错误时对应的中文翻译
const dir = {
  EEXIST: '已存在，请检查参数拼写是否正确',
};
