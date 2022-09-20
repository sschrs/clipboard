const { BrowserWindow, ipcMain } = require("electron")

const createWindow = (options,path)=>{
    let window = new BrowserWindow(options)
    window.loadFile(path)
    return window
}

exports.clipboardWindow = ()=>{
    window = createWindow({
        width : 400,
        height : 350,
        title : "clipboard",
        resizable: false,
        fullScreen: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, 
            enableRemoteModule: true
        }
    },"./views/clipboard.html")    

    ipcMain.on('clean',()=>{
        
    })

    return window
}