const { app, clipboard } = require('electron')
const { watchClipboard } = require('./clipboard')
const { clipboardWindow } = require('./windows')

app.whenReady().then(()=>{
    watchClipboard(clipboardWindow(),500)
})