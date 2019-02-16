const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (isDev) {
    // in development load webpack-dev-server and enable dev-tools
    mainWindow.loadURL('http://127.0.0.1:8080');
    mainWindow.webContents.openDevTools();
  } else {
    // production
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' || isDev) {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
