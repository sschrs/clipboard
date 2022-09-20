const { BrowserWindow, ipcMain } = require("electron")
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
}