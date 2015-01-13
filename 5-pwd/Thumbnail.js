"use strict";

function Thumbnail(location, target, thumbURL, imageURL){
    
    //Skapa thumbnail och sätt dess egenskaper
    var thumb = document.createElement('div');
    thumb.className = "thumbnail";
    thumb.style.backgroundImage = "url(\""+thumbURL+"\")"
    document.getElementById(location).appendChild(thumb);  //thumbnailen till Popupen
    
    //Vid klick på thumbnailen ska bakgrunden på "target" som i detta fall ska vara bakgrunden
    thumb.onclick = function(){
    document.getElementById(target).style.backgroundImage = "url(\""+imageURL+"\")";

    };
    
}