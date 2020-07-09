const { app, BrowserWindow } = require("electron");
const fs = require("fs");
require("./ipc.js");

let mainWin;
const createWindow = () => {
  mainWin = new BrowserWindow({
    width: 640,
    height: 600,
    minHeight: 380,
    minWidth: 640,
    maxWidth: 640,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWin.loadURL("http://localhost:3000");
  mainWin.setMenu(null);
  mainWin.toggleDevTools();
};

app.allowRendererProcessReuse = true;
app.whenReady().then(() => {
  createWindow();
  fs.readFile("./test.json", { encoding: "utf-8" }, function (err, data) {
    if (!err) {
      console.log(data);
    } else {
      console.error(err);
    }
  });
});
