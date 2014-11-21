"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
			// Validate date string??
			var validDate = date.match(/(\d{4})-(\d{2})-(\d{2})/);

			if(validDate[1].length != 4) throw "Fel på året";
			if(validDate[2].length != 2 && validDate > 12) throw "Fel på månad";
			if(validDate[3].length != 2 && validDate > 31) throw "Fel på dag";
			
			var birthDate = new Date(date); //hämta födelsedatumet
			
			var currentDate = new Date(); //ta in nuvarande tid
			var currentYear = currentDate.getFullYear(); // ta in nuvarande år
			
			var theBirthDay = new Date(date); //Skapa variabel för födelsedag
			theBirthDay.setFullYear(currentYear); //Sätta födelsedag till detta år
			
			var msToCurrentDate = currentDate.getTime();
			var msToBirthDay = theBirthDay.getTime();
			
			var differens = msToBirthDay - msToCurrentDate; //räkna ut hur många milisekunder det är mellan dagens datum och födelsedagen detta år
			
			if(differens < 0){ //om födelsedagen redan har varit, sätt till nästa år
				theBirthDay.setFullYear(currentYear+1);
				msToBirthDay = theBirthDay.getTime();
				differens = msToBirthDay - msToCurrentDate;
			}
			
			var dagar = differens / (1000 * 60 * 60 * 24); //räkna om ms till dagar
			dagar = Math.ceil(dagar); //avrunda till närmaste heldag
			
			return dagar;






	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};