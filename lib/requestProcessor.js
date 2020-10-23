const gradient = require("gradient-string");
const { hadithVolume1, hadithVolume2 } = require("../books/HadithVolumes");
const { DisplayMessage } = require("./displayMessage");

// todo more generic based on volume nos
const requestProcessor = async (volume, book, hadithNo) => {
  if (Number(volume) === 1) {
    const result = await hadithVolume1();

    const bookFromVolume1 = result[0].books[Number(book - 1)];
    if (!bookFromVolume1) {
      return console.log(
        gradient("cyan", "pink").multiline(
          "Oh no, we haven't got the hadith you are looking for, probably you can raise a PR for that? " +
            "here is the repo - https://github.com/AshifMohammad/hadith.cli"
        )
      );
    } else {
      const bookName = bookFromVolume1.name;
      const hadithDescription = bookFromVolume1.hadiths[hadithNo - 1];

      return DisplayMessage(bookName, hadithDescription);
    }
  } else if (Number(volume) === 2) {
    const result = await hadithVolume2();
    const bookFromVolume2 = result[0].books[Number(book - 1)];
    if (!bookFromVolume2) {
      return console.log(
        gradient("cyan", "pink").multiline(
          "Oh no, we haven't got the hadith you are looking for, probably you can raise a PR for that? " +
            "here is the repo - https://github.com/AshifMohammad/hadith.cli"
        )
      );
    } else {
      const bookName = bookFromVolume2.name;
      const hadithDescription = bookFromVolume2.hadiths[hadithNo - 1];

      return DisplayMessage(bookName, hadithDescription);
    }
  } else {
    return console.log(
      gradient("cyan", "pink").multiline(
        "Oh no, we haven't got the hadith, only have Volume 1 and 2 for now, In Sha Allah we will update it " +
          "meanwhile here is the repo if you care to raise a PR - https://github.com/AshifMohammad/hadith.cli"
      )
    );
  }
};

module.exports = { requestProcessor };
