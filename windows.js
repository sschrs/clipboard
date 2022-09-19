const { BrowserWindow } = require("electron")

const createWindow = (options,path)=>{
    let window = new BrowserWindow(options)
    window.loadFile(path)
    return window
}

exports.clipboardWindow = ()=>{
    window = createWindow({
        width : 250,
        height : 300,
        title : "clipboard",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, 
            enableRemoteModule: true
        }
    },"./views/clipboard.html")    
    
}