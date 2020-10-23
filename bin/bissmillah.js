#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const { findHadith } = require("../lib/hadithProcessor");
const { circularProgress } = require("../lib/utilities");
console.log(
  chalk.yellow(
    figlet.textSync(" Bissmillah !!!", {
      horizontalLayout: "full",
      font: "Standard",
      width: 200,
      whitespaceBreak: true,
    })
  )
);
circularProgress.start();

setTimeout(() => {
  findHadith();
  circularProgress.stop();
}, 1000);
