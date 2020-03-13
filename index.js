const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron

let mainWindow;

function createWindow () {
    let mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    let ytUrl = "https://www.youtube.com";
    mainWindow.loadURL(ytUrl)
 }
 app.on('ready', createWindow)