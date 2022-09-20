const clipboardWatcher = require('electron-clipboard-watcher')

exports.clipboardList = []

exports.watchClipboard = (window,watchDelay)=>{
    clipboardWatcher({
        watchDelay,
        onTextChange: text =>{
            this.clipboardList.unshift(text)
            console.log(text)
            window.webContents.send("copied",text)
        }
    })
}

exports.cleanClipboard = ()=>{
    this.clipboardList = []
}
