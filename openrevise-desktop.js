const { app, BrowserWindow } = require('electron')

function createWindow () {
  var win = new BrowserWindow({
    icon: __dirname + 'app/assets/icons/openrevise-logo.png',
    width: 900,
    height: 700,
    show: false,
    webPreferences: {
      nodeIntegration: false
    }
  })

  if (process.platform !== 'darwin') {
    // win.removeMenu()
  }

  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadFile('app/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
