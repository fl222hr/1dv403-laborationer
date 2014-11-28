var messageBoard = {
    
    messageCount : 0,
    messages: [],
    
        //Lägg till ett meddelande till arrayen
        addMessage:function(){
            var newMessage = document.getElementById("messageInput").value;
            this.messages.push(new Message(newMessage, new Date()));
            this.renderMessages();
            document.getElementById("messageInput").value  = "";
            this.updateCounter(1);
        },
        
        
        //Skriv ut ett meddelande på skärmen
        renderMessage:function(m){
            
            //Skapa en div för att skriva ut meddelanden
            var div = document.createElement("div");
            div.className = "messageBox";           //Lägger på klassen messageBox på meddelandeDiven
            document.getElementById("messageArea").appendChild(div);
           
            //Skapa knapp för att ta bort meddelande
            var remove = document.createElement("span");
            remove.className = "glyphicon glyphicon-remove";
            remove.onclick = function(){
                messageBoard.removeMessage(m);
            };
            div.appendChild(remove); 
            
            //Skapa en knapp som visar tiden för skapandet
            var time = document.createElement("span");
            time.className = "glyphicon glyphicon-time";
            time.onclick = function(){
                alert("Meddelandet skapades: " + messageBoard.messages[m].getDate());
                };
            div.appendChild(time); 
            
            //Skapa en paragraf i diven för att visa meddelandet
            var text = document.createElement("p");
            text.innerHTML = this.messages[m].getHTMLText();
            text.className = "message";         //Lägger på klassen Message på meddelandet
            div.appendChild(text);
            
            //Skapa en timestamp
            var timeStamp = document.createElement("p");
            var seconds = this.messages[m].getDate().getSeconds();
            var minutes = this.messages[m].getDate().getMinutes();
            var hours = this.messages[m].getDate().getHours();
            timeStamp.innerHTML = (hours<10 ? "0" : "") + hours + ":" +(minutes<10 ? "0" : "") + minutes + ":" + (seconds<10 ? "0" : "") + seconds;
            timeStamp.className = "timeStamp";         //Lägger på klassen Message på meddelandet
            div.appendChild(timeStamp);
            
            

        },
        
        
        //Rensa skärmen och skriva ut alla meddelanden
        renderMessages:function(){
            
            //Rensa skärmen på meddelanden
            document.getElementById("messageArea").innerHTML = "";
            
            //Skriv ut alla meddelanden som ligger i arrayen
            for(var i = 0; i<this.messages.length; i++){
                this.renderMessage(i);
            }
    
          } ,
          
          // Ta bort ett meddelande
          removeMessage:function(messageToRemove){
              var remove = confirm("Är du säker?");
              if(remove){
                this.messages.splice(messageToRemove,1);
                this.renderMessages();
                this.updateCounter(-1);
              }

          },
          
          //Funktion för att uppdatera countern
          updateCounter:function(change){
              this.messageCount = this.messageCount + change;
              var counterText = "Antal meddelanden: " + (this.messageCount);
              document.getElementById("counter").innerHTML = counterText;
          },
          
          enterPressed:function(){
              messageBoard.addMessage();
              document.getElementById("messageInput").value = "";
          }
          
          
          
          
        
};

window.onload = function(){
 document.getElementById("sendMessage").onclick = function() {
     messageBoard.addMessage();
 };
 
 document.getElementById("messageInput").onkeypress = function(e) {
    if(e.shiftKey === false){
        if (e.which == 13){
            e.preventDefault();
            messageBoard.enterPressed();
        }
    }
    
    
};


    
};




