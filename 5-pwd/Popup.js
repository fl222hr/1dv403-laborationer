"use strict";

function Popup(ID, parent, name, iconURL, width, height, leftMargin, topMargin){
    
    var active = false;
    //Skapa popupen och sätt dess egenskaper
    var popup = document.createElement('div');
    popup.className = "popup";
    popup.style.width = width + "px";
    popup.style.height = height + "px";
    popup.style.marginLeft = leftMargin +"px";
    popup.style.marginTop = topMargin +"px";
    document.getElementById(parent).appendChild(popup);  //Addera popupen till Desktopen
    
    //Skapa top-baren
    var topBar = document.createElement('div');
    topBar.className = "topBar";
    popup.appendChild(topBar); //Addera TopBaren till popupen
    
        var headline = document.createElement('div');
        headline.className = "headline";
        topBar.appendChild(headline);
            
            var headlineIcon = document.createElement('div');
            headlineIcon.className = "headlineIcon";
            headlineIcon.style.backgroundImage =  "url(\""+iconURL+"\")";
            headline.appendChild(headlineIcon);
            
            var headlineText = document.createElement('p');
            headlineText.className = "headlineText";
            headlineText.innerHTML = name;
            headline.appendChild(headlineText);
    
        var closeButton = document.createElement('div');
        closeButton.className = "closeButton";
        closeButton.innerHTML = "X";
        topBar.appendChild(closeButton);
    
    //Skapa content-diven i popupen
    var popupContent = document.createElement('div');
    popupContent.className = "popupContent";
    popupContent.id = ID;
    popup.appendChild(popupContent);
    
    //Skapa bottom-baren
    var bottomBar = document.createElement('div');
    bottomBar.className = "bottomBar";
    popup.appendChild(bottomBar);
    
        var status = document.createElement('div');
        status.className = "statusText";
        status.id = ID + "Status";
        bottomBar.appendChild(status);
            
            var ajaxLoader = document.createElement('div');
            ajaxLoader.className = "ajaxLoader";
            status.appendChild(ajaxLoader);
            
            var statusText = document.createElement('div');
            statusText.className = "statusText";
            statusText.innerHTML = "Laddar...";
            status.appendChild(statusText);
    
    
    closeButton.onclick = function(){
    document.getElementById(parent).removeChild(popup);
     
    };
    
    this.setStatusText = function(text){
        statusText.innerHTML = text;
    };
    
    this.getParent = function(){
        return parent;
    };
    
    this.getWidth = function(){
      return width;  
    };
    
}