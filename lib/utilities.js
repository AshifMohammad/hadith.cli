const chalk = require("chalk");
const ora = require("ora");
const { compare } = require("compare-versions");

const systemNodeVersion = String(process.version.split("v")[1]);

const exitGateCheck = () => {
  if (compare(systemNodeVersion, "10.0.0", "<=")) {
    console.log(
      chalk.yellow.inverse(
        "👀 You need to up your game in node, please install more than 10.0.0"
      )
    );
    console.log(
      chalk.green(`🧐 Looks like your currrent version is ${systemNodeVersion}`)
    );
    process.exit(1);
  }
};

const circularProgress = ora({
  text: "Getting is ready for you...",
  spinner: {
    frames: ["🤲🏻", "🤲🏽", "🤲🏿", "🤲🏼", "🤲🏾"],
    interval: 200,
  },
});

module.exports = { exitGateCheck, circularProgress };
