const clipboardWatcher = require('electron-clipboard-watcher')
const { clipboard } = require('electron')

exports.clipboardList = []

exports.watchClipboard = (window,watchDelay)=>{
    clipboardWatcher({
        watchDelay,
        onTextChange: text =>{
            if (!this.clipboardList.includes(text)){
                this.clipboardList.unshift(text)
                window.webContents.send("copied",text)
            }
        }
    })
}

exports.cleanClipboard = ()=>{
    this.clipboardList = []
}

exports.addClipboard = (text)=>{
    clipboard.writeText(text)
}
