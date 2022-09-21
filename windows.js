const { BrowserWindow, ipcMain, shell } = require("electron")
const { cleanClipboard, addClipboard } = require("./clipboard")

const createWindow = (options,path)=>{
    let window = new BrowserWindow(options)
    window.loadFile(path)
    return window
}

exports.clipboardWindowActions = (app)=>{   
    ipcMain.on('clean',()=>{
        cleanClipboard()
    })

    ipcMain.on('copy',(err,data)=>{
        addClipboard(data)
    })

    ipcMain.on('settings',()=>{
        this.settingsWindow(app)
    })
}

exports.settingsWindow = (app)=>{
    let window = createWindow({
        width : 200,
        height : 140,
        title : "clipboard",
        resizable: false,
        fullScreen: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, 
            enableRemoteModule: true
        }
    },"./views/settings.html")

    window.webContents.once('dom-ready',()=>{
        window.webContents.send('isAutoLaunchEnabled', app.getLoginItemSettings().openAtLogin)
    })

    ipcMain.on('switchAutoLaunch',(err,data)=>{
        
        app.setLoginItemSettings({
            openAtLogin: data
        })
    })

    ipcMain.on('github',()=>{
        shell.openExternal("https://github.com/sschrs/clipboard")
    })

    window.on('closed',()=>{
        window = null;
    })
}