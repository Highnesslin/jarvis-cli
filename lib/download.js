const { promisify } = require('util');

module.exports.clone = async (repo, desc) => {
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`πππδΈθ½½δΈ­γγγ${repo}`);

  process.start();

  await download(repo, desc);

  process.succeed();
};
