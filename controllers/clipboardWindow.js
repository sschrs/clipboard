$(window).on('load',()=>{
    
    let check = ()=>{
        listItems = document.getElementsByTagName('li')
        if (listItems.length <= 0){
            $('#no-items').show()
        }else{
            $('#no-items').hide()
        }
    }

    check()

    const { ipcRenderer } = require('electron')
    ipcRenderer.on('copied',(err,data)=>{
        let clipboardList = document.getElementById('clipboard-list')

        let li = document.createElement('li');
        li.className = 'list-group-item list-item d-flex justify-content-between align-items-center';

        let textArea = document.createElement('div')
        textArea.className = 'text-area'
        textArea.innerText = data;

        let copyButton = document.createElement('a')
        copyButton.className = 'btn btn-sm btn-outline-secondary copy-button'
        copyButton.href = '#'

        let copyButtonIcon = document.createElement('i')
        copyButtonIcon.className = 'fa fa-copy'


        copyButton.append(copyButtonIcon)
        li.append(textArea)
        li.append(copyButton)
        clipboardList.prepend(li)


        copyButton.addEventListener('click',function(){
            ipcRenderer.send('copy',textArea.innerText)
        })

        check()
    })


    $(".reset-button").click(()=>{
        let clipboardList = document.getElementById('clipboard-list')
        clipboardList.innerHTML = ''
        ipcRenderer.send('clean')
        check()
    })

    $('.settings-button').click(()=>{
        ipcRenderer.send('settings')
    })


})