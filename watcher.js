
exports.clipboardList = []

exports.configWatcher = {
    watchDelay: 500,
    onTextChange : (text)=>{
        this.clipboardList.unshift(text)
    }
}