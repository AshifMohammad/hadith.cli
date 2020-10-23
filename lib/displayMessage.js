const gradient = require("gradient-string");
const chalk = require("chalk");

const DisplayMessage = (title, messageObj) => {
  try {

    if (title && messageObj.by && messageObj.text && messageObj.info) {
      console.log(
        gradient("pink", "cyan", "yellow").multiline(
          `Hadith ☝ : ${messageObj.text}`
        )
      );
      console.log(gradient("cyan", "pink")(`Book Name : ${title}`));

      console.log(
        chalk.magenta.inverse(
          `${chalk.magenta.inverse("Narrated By ✍ :")} ${messageObj.by}`
        )
      );
      console.log(`${chalk.yellow.inverse(`${messageObj.info}`)}`);
    } else {
      console.log(
        gradient(
          "cyan",
          "pink"
        )(
          "Oh no, we haven't got the hadith you are looking for, probably you can raise a PR for that?"
        )
      );
      console.log(
        gradient(
          "yellow",
          "green"
        )("here is the repo - https://github.com/AshifMohammad/hadith.cli")
      );
    }

    return;
  } catch (e) {
    console.log(
      gradient(
        "cyan",
        "pink"
      )(
        "Oh no, we haven't got the hadith you are looking for, probably you can raise a PR for that?"
      )
    );
    console.log(
      gradient(
        "yellow",
        "green"
      )("here is the repo - https://github.com/AshifMohammad/hadith.cli")
    );
  }
};

module.exports = { DisplayMessage };
