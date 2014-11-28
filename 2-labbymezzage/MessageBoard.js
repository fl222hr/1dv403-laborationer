var messageBoard = {
    
    messageCount : 0,
    messages: [],
    
    
        init:function(){

        },
        
        addMessage:function(){
            var newMessage = document.getElementById("messageInput").value;
            this.messages.push(new Message(newMessage, new Date()));
            this.renderMessages();
            document.getElementById("messageInput").value  = "";
        },
        
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
              }

          }
        
};

window.onload = function(){
 document.getElementById("sendMessage").onclick = function() {
     messageBoard.addMessage();
 };

    
};

//document.getElementByID("sendMessage").onclick = function(){alert("test");};
//messageBoard.messages.push(new Message("Första Meddelandet", new Date()));
//messageBoard.messages.push(new Message("Andra Meddelandet", new Date()));
//messageBoard.messages.push(new Message("Tredje Meddelandet", new Date()));
//messageBoard.renderMessages();


