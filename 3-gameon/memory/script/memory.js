"use strict";

var memory = {
    rows: 4,  //antal rader
    columns:4, //antal kolumner
    brickSize: 50, //storleken på brickorna
    counter: 0,
    points:0,
    first: "",
    firstIndex:"start",
    secondIndex:"",
    clickAvail:true,
    pieces: [],
    
    init:function(){
        memory.CreateGame(this.rows, this.columns); //Skapa och rita upp en spelbricka med de givna nimensionerna
        this.pieces = RandomGenerator.getPictureArray(this.rows,this.columns); //Fyll på pieces arrayen med randoms
    },
    
    //Rita upp brickorna och lägg på onclick event
    CreateGame:function(r, m){
        document.getElementById("main").style.width= this.rows*this.brickSize + 'px';
       var index = 0;
        //Skapa en div för alla brickor
        for (var i = 0; i < r; i++) {
            for (var b = 0; b < m; b++) {
                var div = document.createElement("div");
                div.className = "piece";           //lägger på klassen piece på diven
                div.id = index;                 //lägger på ett id på piecen
                document.getElementById("main").appendChild(div);
                
                //Addera ett onclick event som baseras på indexet
                div.onclick = function(_index){
                return function(){
                    memory.FlipPiece(_index);
                };}(index);
                index++;
            }
        }
        
        
    },
    
    //funktion för att sköta flippandet av knapparna och sedan matcha
    FlipPiece:function(i){
        if(i != memory.firstIndex){
            if(memory.first == 0){
            memory.first = memory.pieces[i]; //Sätt förstavärdet
            memory.firstIndex = i;
            document.getElementById(i).className="piece piece"+memory.pieces[i];
            }else{
                if(memory.clickAvail){
                memory.clickAvail = false; //Tillåt inte fler klick förens matchningen är klar
                memory.secondIndex = i;
                document.getElementById(i).className="piece piece"+memory.pieces[i];
                setTimeout(function() {memory.Match(memory.first, memory.pieces[i])}, 1000);
                }
            }
    }
    },
    
    //kolla om två brickor matchar, isåfall hantera utfallet
    Match:function(_first, _second){
        
        if(_first == _second){ //om dom matchar
        
            document.getElementById(memory.firstIndex).className="piece done"; //markera som färdig (ta bort bild)
            document.getElementById(memory.firstIndex).onclick = ""; // ta bort onclick eventet
            document.getElementById(memory.secondIndex).className="piece done";
            document.getElementById(memory.secondIndex).onclick = ""; //ta bort onclick eventet
            memory.points = memory.points + 2;
        }else{ //Om dom inte matchar
            document.getElementById(memory.firstIndex).className="piece"; //återställ knappen
            document.getElementById(memory.secondIndex).className="piece"; //återställ
        }
            memory.first = "";
            memory.firstIndex = "clean";//Återställ så att nästa är en förstaflipp   
            memory.clickAvail = true; //tillåt klick igen
            memory.counter++;
            if(memory.points >= memory.pieces.length){
                var done = document.createElement("p");
                done.innerHTML="Du klarade det! på " + memory.counter + " omgångar!!";
                document.getElementById("main").appendChild(done);
            }
    }
}

window.onload = function(){
    memory.init();
}