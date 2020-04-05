const { app, BrowserWindow } = require("electron");

let mainWin;
const createWindow = () => {
    mainWin = new BrowserWindow({
        width: 640,
        height: 600,
        minHeight: 380,
        minWidth: 640,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWin.loadURL("http://localhost:3000");
    mainWin.setMenu(null);
};

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow);
