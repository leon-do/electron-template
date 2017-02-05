var app = require('electron').app; //instance of app
var BrowserWindow = require('electron').BrowserWindow;

//when it's ready...
app.on('ready', function(){

	//create the window
	var mainWindow = new BrowserWindow({width:800, height:600})
	mainWindow.loadURL('file://' + __dirname + '/index.html')

})