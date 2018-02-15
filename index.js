'use strict';

const path = require('path');
const url = require('url');

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// We need a global ref to the window
let appWindow;

function initializeApp() {
    //  const icon = __dirname + '/icon.png';
    appWindow = new BrowserWindow({ show: false,
                                    // Once app can notify us of closing, change this to false
                                    frame: true,
                                    // useContentSize: true,
                                    width: 275,
                                    height: 350,
                                    title: 'Winamp2-js',
                                    acceptFirstMouse: true,
                                    autoHideMenuBar: true,
                                    fullscreenable: false,
                                    // opacity: 0.5,
                                    // icon: icon,
                                    // transparent: true,
                                    thickFrame: false });

    appWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
    }));

    // Open the developer console if needed.
    // appWindow.webContents.openDevTools();

    appWindow.once('ready-to-show', () => {
        appWindow.show();
    });

    appWindow.on('closed', function () {
        appWindow = null;
        app.quit();
    });
}

// Don't launch multiples of the app
const isSecondInstance = app.makeSingleInstance(() => {
    if (appWindow) {
        if (appWindow.isMinimized()) {
            appWindow.restore();
        }
        appWindow.focus();
    }
});

if (isSecondInstance) {
    app.quit();
}

app.on('ready', initializeApp);
app.on('window-all-closed', app.quit);
