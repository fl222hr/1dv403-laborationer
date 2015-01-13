"use strict";

function Tab(ID, parent, name, width, height, topMargin, stickerWidth){
    var active = false;
    //Skapa popupen på dess parent
    var tab = document.createElement('div');
    tab.style.width = stickerWidth +"px";
    tab.style.marginLeft = -(stickerWidth/2) + 5 + "px";
    tab.style.marginTop = topMargin + "px";
    tab.className = "tab";
    //tab.style.marginLeft = "-" + width + "px";
    document.getElementById(parent).appendChild(tab);
    
    var label = document.createElement('div');
    label.innerHTML = name;
    tab.appendChild(label);
    
    var container = document.createElement('div');
    container.className = "container";
    container.ID = ID;
    container.style.width = width + "px";
    container.style.height = height + "px";
    container.style.marginLeft = (width/2) + "px";
    container.style.marginTop = (-width/2) + "px";
    tab.appendChild(container);
    
    label.onclick = function(){
     if(!active){
     tab.className = "tabActive";
     active = true;
     }else {
         tab.className = "tab";
         active = false;
     } 
     
    };
    
    this.getID = function(){
        return ID;
    };
    
    this.getParent = function(){
        return parent;
    };
    
    this.getWidth = function(){
      return width;  
    };
    
}