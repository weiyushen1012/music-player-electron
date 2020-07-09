const { ipcMain } = require("electron");
const fs = require("fs");

const SAVE_PLAYLIST = "SAVE_PLAYLIST";

ipcMain.on(SAVE_PLAYLIST, (_, arg) => {
  fs.writeFile("./test.json", JSON.stringify(arg), function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
});
