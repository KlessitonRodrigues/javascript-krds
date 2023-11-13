const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
  // win.setFullScreen(true);
  win.openDevTools();
  setInterval(() => console.log(win), 1000);
};

app.whenReady().then(() => {
  createWindow();
});
