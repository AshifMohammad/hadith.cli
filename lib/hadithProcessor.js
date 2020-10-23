const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("inquirer");
const { program } = require("commander");
const config = require("./config");
const { exitGateCheck } = require("./utilities");
const { helpMeHints } = require("./helpMeHints");
const { volumeSelector } = require("./questionaire");
// const { wipMessage } = require("./commonMessages");

const findHadith = () => {
  // check the node version and throw out if not met the condition
  exitGateCheck();
  clear();


  console.log(
    chalk.yellow(
      figlet.textSync("Sahih Bukhari Hadith Help Center", {
        horizontalLayout: "full",
        font: "Standard",
        width: 100,
        whitespaceBreak: true,
      })
    )
  );

  console.log(chalk.bold.yellow.inverse(`Version: ${config.version}`));

  // process arguments parsing
  program.option("-vol-, --volumeNo", "Volume No", "1");
  program.option("-bk, --bookNo", "Book No", "1");
  program.option("-hdNo, --hadithNo", "Hadith No", "1");
  program.parse(process.argv);

  volumeSelector();
};

module.exports = { findHadith };
