"use strict";

var DesktopApp ={
    
    defaultBackground: "images/default.png", //variable to keep url to default background
    desktopID: "desktop",
    toolbarID: "toolbar",
    buttonID:"button",
    popupURL: "popup.html",
    
    init:function(){
    this.setupDesktop();
    this.setBackground(this.defaultBackground);
    },
    
    setupDesktop:function(){
    
    //Setup the desktop    
    var desktop = document.createElement('div');
    desktop.id = this.desktopID;
    
        //Setup the toolbar
        var toolbar = document.createElement('div');
        toolbar.id = this.toolbarID;
        toolbar.innerHTML = "En Toolbar";
        desktop.appendChild(toolbar);
        
        //Setup the button
        var button = document.createElement('div');
        button.id = this.buttonID;
        toolbar.appendChild(button);
        
       button.onclick = function(_index){
       console.log("Click");
           
       }
        
        
    document.body.appendChild(desktop); //add the desktop to the "site"

    },
    
    setBackground:function(imageUrl){
        console.log("Fired");
        document.getElementById(this.desktopID).style.backgroundImage = "url(\""+imageUrl+"\")";
    }
};

window.onload = function(){
    DesktopApp.init();
};


/*
//var win = open('index.html', 'example', 'width=1024,height=640')
win.focus()
win.onload = function() {
  var div = win.document.createElement('div')
  div.innerHTML = 'Welcome into the future!'
  div.style.fontSize = '30px'
  win.document.body.insertBefore(div, win.document.body.firstChild)
}
*/