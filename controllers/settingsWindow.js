$(window).on('load',()=>{
    const { ipcRenderer } = require('electron')

    ipcRenderer.on('isAutoLaunchEnabled',(err,data)=>{
      $('#auto-launch').prop('checked', data)
    })

    $('#auto-launch').change(function(){
        let checked = this.checked
        ipcRenderer.send('switchAutoLaunch',checked)
    })

    $('#quit-button').click(()=>{
        ipcRenderer.send('quit')
    })

    $('#github-button').click(()=>{
        ipcRenderer.send('github')
    })
})