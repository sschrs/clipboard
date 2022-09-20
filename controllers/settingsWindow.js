$(window).on('load',()=>{
    const { ipcRenderer } = require('electron')

    $('#quit-button').click(()=>{
        ipcRenderer.send('quit')
    })

    $('#github-button').click(()=>{
        ipcRenderer.send('github')
    })

})