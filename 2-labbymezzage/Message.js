function Message(message, date){
    
    
    this.getText = function(){
        return message;
    }
    
    this.setText = function(text){
        message = text;
    }
    
    this.getDate = function(){
        return date;
    }
    
    this.setDate = function(newDate){
        date = newDate;
    }
}

Message.prototype.toString = function(){
    return this.getText() + " (" + this.getDate() + ") ";
}

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/\n/g, "<br />");  
}

