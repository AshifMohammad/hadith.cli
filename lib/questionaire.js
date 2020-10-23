const chalk = require("chalk");
const { prompt } = require("enquirer");
const { requestProcessor } = require("./requestProcessor");

const volumeQuestions = [
  {
    type: "rawlist",
    name: "Volume",
    choices: ["Volume 1", "Volume 2"],
    message: chalk.green("Please Select the Volume No. of Hadith ?"),
  },
];

const queries = [
  {
    type: "input",
    name: "volume",
    message: "Please tell us what volume no you want to look through?",
  },
  {
    type: "input",
    name: "book",
    message: "Please tell us book no of this volume?",
  },
  {
    type: "input",
    name: "hadithNo",
    message: "Please tell us hadith no you are looking?",
  },
];

const volumeSelector = () => {
  prompt(queries).then(({ volume, book, hadithNo }) => {
    requestProcessor(volume, book, hadithNo);
  });
};

module.exports = { volumeSelector };
