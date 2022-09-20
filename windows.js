const { BrowserWindow, ipcMain,shell } = require("electron")
const { cleanClipboard, addClipboard } = require("./clipboard")

const createWindow = (options,path)=>{
    let window = new BrowserWindow(options)
    window.loadFile(path)
    return window
}

exports.clipboardWindowActions = ()=>{   
    ipcMain.on('clean',()=>{
        cleanClipboard()
    })

    ipcMain.on('copy',(err,data)=>{
        addClipboard(data)
    })

    ipcMain.on('settings',()=>{
        this.settingsWindow()
    })
}

exports.settingsWindow = ()=>{
    createWindow({
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

    ipcMain.on('github',()=>{
        shell.openExternal("https://github.com/sschrs/clipboard")
    })
}