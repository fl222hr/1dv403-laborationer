"use strict";

function Thumbnail(location, target, thumbURL, imageURL, width, height){
    
    //Skapa thumbnail och sätt dess egenskaper
    var thumb = document.createElement('div');
    thumb.className = "thumbnail";
    thumb.style.backgroundImage = "url(\""+thumbURL+"\")";
    thumb.style.width = width +"px";
    thumb.style.height = height + "px";
    document.getElementById(location).appendChild(thumb);  //thumbnailen till Popupen
    
    //Vid klick på thumbnailen ska bakgrunden på "target" som i detta fall ska vara bakgrunden
    thumb.onclick = function(){
    document.getElementById(target).style.backgroundImage = "url(\""+imageURL+"\")";

    };
    
}