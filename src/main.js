const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow(){
    const win = new BrowserWindow({
        width : 1200,
        height : 800,
        webPreferences: {
            nodeIntegration : true
        }
    })
    win.loadURL("http://localhost:3000")
}
app.whenReady().then(()=>{
    createWindow()
})
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin')app.quit()
})
