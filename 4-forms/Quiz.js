"use strict";

var Quiz = {
    url: "http://vhost3.lnu.se:20080/question/1",
    question: "Första frågan",
    tries:0,
    answerTries: [],
    triesString:"Nu är du klar! <br>",
    form: document.getElementById("theForm"),
    questionP: document.getElementById("question"),
    
    
    init:function(){
        Quiz.reloadForm();
        Quiz.form.onsubmit = function(e){
       
        //Testa strängen att det finns något it den    
        if(Quiz.checkForm(Quiz.form.elements["answer"].value)){
        Quiz.sendAnswer(Quiz.form.elements["answer"].value);
        Quiz.form.elements["submit"].disabled = true;
        }else{
            alert("Du skrev inget svar");
        }

        return false;
        };
    },
    
    //Ladda en ny fråga från servern
    reloadForm:function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
            var svar = JSON.parse(xhr.responseText);
            console.log(svar);
            Quiz.question = svar["question"];
            Quiz.questionP.innerHTML = Quiz.question;
            Quiz.url = svar["nextURL"];
            }
        };
        xhr.open('GET', Quiz.url, true);
        xhr.send(null);
        Quiz.form.elements["answer"].value = ""; //Resetta svarsrutan
        Quiz.form.elements["submit"].disabled = false;
    },
    
    //kolla att det finns något i strängen
    checkForm:function(_answer){
        if(_answer === ""){
            return false;
        }else{
            return true;
        }
    },
    
    
    //Skicka svaret och kolla om det stämmer
    sendAnswer:function(_answer){
        Quiz.tries++; //räkna upp antalet försök
        
        var skicka = { //variabeln att skicka med i POST requesten
            "answer": _answer
        };
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
                //Om allt ok och rätt svar
                if(xhr.readyState === 4 && xhr.status === 200){
                var svar = JSON.parse(xhr.responseText);
                    if(svar["message"] == "Correct answer!"){
                        
                        if(svar["nextURL"] != null){
                        Quiz.answerTries.push(Quiz.tries);
                        Quiz.tries = 0;
                        Quiz.url = svar["nextURL"];
                        Quiz.reloadForm();
                        }else{
                            Quiz.answerTries.push(Quiz.tries);
                            for(var i = 0; i < Quiz.answerTries.length; i++){
                                Quiz.triesString = Quiz.triesString + ("Fråga " + (i+1) + ": " +Quiz.answerTries[i] + " försök <br>");
                            }
                            Quiz.questionP.innerHTML = Quiz.triesString;
                        }
                        
                        
                    }
    
                }
                
                //Om fel svar
                if(xhr.readyState === 4 && xhr.status === 400){
                    alert("fel svar!");
                    Quiz.form.elements["answer"].value = "";
                    Quiz.form.elements["submit"].disabled = false;
                }
 
        };
        xhr.open('POST', Quiz.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(skicka));
    }

};


window.onload = function(){

    Quiz.init();

    
};