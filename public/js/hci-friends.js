'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	var anagram = anagrammedName($('#name').text());
	if (anagram == "") {
		anagram = "(" + anagrammize($('#name').text()) + ")";
	} else {
		anagram = "(" + anagram + ")";
	}
	$('.anagrammed').text(anagram);
}

function anagrammize(name) {
	var str = name;
	console.log(name);
	for (var i = 0; i < name.length; i++) {
		console.log('a');
		var randomPos1 = Math.floor(Math.random() * name.length);
		var randomPos2 = Math.floor(Math.random() * name.length);
		console.log(randomPos1 + " " + randomPos2);
		if (randomPos1 > randomPos2) {
			str = str.substring(0, randomPos2) + str.charAt(randomPos1) + str.substring(randomPos2 + 1, randomPos1)
						+ str.charAt(randomPos2) + str.substring(randomPos1 + 1);
		} else if (randomPos2 > randomPos1) {
			str = str.substring(0, randomPos1) + str.charAt(randomPos2) + str.substring(randomPos1 + 1, randomPos2)
						+ str.charAt(randomPos1) + str.substring(randomPos2 + 1);
		}
	}
	return str;
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return "";
	}
}