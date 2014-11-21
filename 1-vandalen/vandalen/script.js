"use strict";

var makePerson = function(persArr){
  
    var theNames = new Array();
    var theMaxAge = 0;
    var theMinAge = 1000;
    var theAverageAge = 0;
    var nameString = "";

  for(var i = 0; i < persArr.length; i++){
    if(persArr[i].age > theMaxAge) theMaxAge = persArr[i].age;
    if(persArr[i].age < theMinAge) theMinAge = persArr[i].age;
    theAverageAge = theAverageAge + persArr[i].age;
    theNames.push(persArr[i].name);
  }
    
    theAverageAge = Math.round(theAverageAge / persArr.length);
    
    
    theNames.sort(function (a, b){
      return a.localeCompare(b);
    });
    
      for(var i = 0; i < (theNames.length -1); i++){
    nameString = nameString + theNames[i] + ", ";
  }
    nameString = nameString + theNames[i];
    
    
  var result = {
        minAge: theMinAge, 
        maxAge: theMaxAge, 
        averageAge: theAverageAge,
        names: nameString
    };
    
    return result;


};

