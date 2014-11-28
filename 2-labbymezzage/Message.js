function Message(message, date){
    
    var _date = date;
    
    this.getText = function(){
        return message;
    }
    
    this.setText = function(text){
        message = text;
    }
    
    this.getDate = function(){
        return _date;
    }
    
    this.setDate = function(date){
        _date = date;
    }
}

Message.prototype.toString = function(){
    return this.getText() + " (" + this.getDate() + ") ";
}

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/\n/g, "<br />");  
}

