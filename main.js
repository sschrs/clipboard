const { app, ipcMain } = require('electron')
const { watchClipboard } = require('./clipboard')
const { clipboardWindowActions } = require('./windows')
const { menubar } = require('menubar');



const mb = menubar({
    dir:  app.getAppPath(),
    index: 'file://' + app.getAppPath() + '/views/clipboard.html',
    showDockIcon : false,
    browserWindow : {
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
    }
});

mb.on('ready', () => {
    mb.showWindow()
    mb.on('after-create-window', ()=>{
        console.log(app.getAppPath() + '/assets/icons/clipboard.png',)
        app.dock.hide()
        watchClipboard(mb.window, 500);
        clipboardWindowActions()
        
        ipcMain.on('quit',()=>{
            app.quit()
        })
    })
  });
