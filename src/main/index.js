const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({

    icon: __dirname + '/media/logo.ico',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#363636',
      symbolColor: '#FF8D39',
      height: 25
    },
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, 
      enableRemoteModule: true, // turn off remote
     // preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.maximize();

  mainWindow.webContents.openDevTools();
  
  mainWindow.show();

  mainWindow.loadURL(path.join(__dirname, '../renderer/dist/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });

  ipcMain.handle("processValue", async(e, v)=> {
    return parseInt(v)+1000;
  });

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
