const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const db = require("./tools/database");

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({

    icon: __dirname + '/media/logo.ico',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#ececec',
      symbolColor: '#000000',
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


  let mk;
  let dbPath;
  let noteEntityType;

  (async ()=>{
    mk;
    dbPath = __dirname + "../../../";
    
    noteEntityType = await db.generateEntityTypeObject("note", (v)=>{return true;});
  })();
  
  ipcMain.handle("login", async(e, password)=> {
    try {
      if(await db.checkExist(dbPath)) {
        mk = await db.getMasterKey(dbPath, password);
      } else {
        await db.create(dbPath, password);
        mk = await db.getMasterKey(dbPath, password);
      }
      return true;
    } catch (error) {
      return false;
    }
  });

  ipcMain.handle("delEntity", async(e, id)=> {
    await db.rmEntity(dbPath, mk, noteEntityType, id);
  });

  ipcMain.handle("isNoteExist", async(e, noteId)=> {
    let noteIds = await db.getEntitiesIdsByType(dbPath, mk, noteEntityType);

    let isExist = false;
    for (let i of noteIds) {
      if (noteId == i) isExist = true;
    }

    return isExist;
  });

  ipcMain.handle("createNewNoteAndGetId", async(e)=> {
    let id = await db.newId();

    let note = {
      blockList: ["text"],
      text: ""
    };

    await db.setEntity(dbPath, mk, noteEntityType, id, note);
    return id;
  });

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
