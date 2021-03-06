"use strict";
const yargs = require('yargs');
const argv = yargs
  .option("development", {
    alias: "d",
    describe: "Use development environemnt",
    type: "boolean"
  })
  .option("production", {
    alias: "p",
    describe: "Use production environment",
    type: "boolean"
  })
  .option("analyze", {
    alias: "a",
    describe: "Analyze bundle",
    type: "boolean"
  })
  .conflicts("development", "production")
  .parse();

const env = require('../etc/env');
env.load();
let buildSetting = argv.env;
if (!argv.development && !argv.production) // if no argument, use default set by .env file
  buildSetting = null;
else {
  if (argv.development) buildSetting = "development";
  else if (argv.production) buildSetting = "production";
  process.env.NODE_ENV = buildSetting
}
env.correct();
env.check();

const compiler = require('../etc/compiler');

// async IIFE
(async () => {
  await new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) {
        console.log(error);
        reject(error);
        return;
      }
      resolve(stats);
    });
  });
})();