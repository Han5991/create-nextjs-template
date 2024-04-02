#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
  try {
    execSync(command, {stdio: 'inherit'});
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckout = `git clone --depth 1 https://github.com/Han5991/create-nextjs-template.git ${
  repoName || 'my-app'
}`;
const installDepsCommand = `cd ${repoName} && yarn`;

console.log(`Creating a new Next.js app in ${repoName}`);

const checkOut = runCommand(gitCheckout);

if (!checkOut) {
  console.error('Failed to create new Next.js app');
  process.exit(-1);
}

const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  console.error('Failed to install dependencies');
  process.exit(-1);
}

console.log('Done!');
console.log(`cd ${repoName}`);
