"use strict";

var DesktopApp ={
    
    defaultBackground: "images/default.png", //variable to keep url to default background
    backgrounIcon: "images/bgIcon.png", //variable to keep url to default icon
    desktopID: "desktop", //ID to reference the Desktop
    backgroundPopupID: "bgPopup", //ID to reference the Popup for changing background
    thumbnailURL:"http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
    
    init:function(){
    this.setupDesktop();
    this.setBackground(this.defaultBackground);
    },
    
    setupDesktop:function(){
    
    //Setup the desktop    
    var desktop = document.createElement('div');
    desktop.id = this.desktopID;
    document.body.appendChild(desktop); //add the desktop to the "site"
    
    //Setup the icon
    var icon = document.createElement('div');
    icon.className = "icon";
    icon.style.backgroundImage = "url(\""+this.backgrounIcon+"\")";
    desktop.appendChild(icon);
    icon.onclick = this.openPopup;
    
    },
    
    //Load the thumbnails into the popup window
    loadThumbnails:function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
            var thumbs = JSON.parse(xhr.responseText);

            //Loop through the results from the requests and create new Thumbnail
            for(var i = 0; i < thumbs.length; i++){
            var thumb = new Thumbnail(DesktopApp.backgroundPopupID, DesktopApp.desktopID, thumbs[i]["thumbURL"], thumbs[i]["URL"]);
            }
            document.getElementById(DesktopApp.backgroundPopupID+"Status").className += " hidden"; //Remove the status text for loading
            }
        };
        xhr.open('GET', DesktopApp.thumbnailURL, true);
        xhr.send(null);
    },
    
    //Open a popupwindow
    openPopup:function(){

    if(!document.getElementById(DesktopApp.backgroundPopupID)){ //Check if popup already exist
    var popup = new Popup("bgPopup", DesktopApp.desktopID, "Choose Background", DesktopApp.backgrounIcon, 420, 840, 200, 50); //Create new popup
    DesktopApp.loadThumbnails(); //Ladda in tumbnails
    }
    },
    
    setBackground:function(imageUrl){
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