const chalk = require("chalk");

const helpMeHints = () => {
  console.log(
    chalk.white(`usage: flexdoc [<options>] [--] <command>
    Sahih Bukhari Hadith Helper options:
    
    -vol, --volumeNo                    Hadith Volume No
    -bk, --bookNo                       Hadith Book No
    -hdNo, --hadithNo                   Hadith No
    `)
  );
};

module.exports = { helpMeHints };
