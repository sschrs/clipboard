const { app, clipboard } = require('electron')
const clipboardWatcher = require('electron-clipboard-watcher')
const { configWatcher } = require('./watcher')
const { clipboardWindow } = require('./windows')

app.whenReady().then(()=>{
    clipboardWatcher(configWatcher)
    clipboardWindow()
})