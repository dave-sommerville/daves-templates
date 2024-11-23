'use strict';
/*------------------------------------------------------------------------->
  Utility Functions 
<-------------------------------------------------------------------------*/

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

function isImageFile(file) {
  return file && file.type.startsWith('image');
}

function generateUniqueId() {
  return '#:' + Date.now();
}

function addClass(element, customClass) {
  element.classList.add(customClass);
  return element;
}

function removeClass(element, customClass) {
  element.classList.remove(customClass);
  return element;
}

function assignId(element) {
  element.id = id;
  return element;
}

function createImage(imageSrc) {
  const img = document.createElement('img');
  img.src = imageSrc;  
  img.alt = imageSrc; // Because the photo could be anything 
  return img;
}

function create(element) {
  const newElement = document.createElement(element); 
  return newElement;
}

function addText(element, text) {
  element.textContent = text; 
}

//Gives Random Boolen
let yesOrNo = Math.random() >= 0.5;

//Random Hex color (need `` and ${})
let randColor = ""; //Needs fixing 
randColor = Math.floor(Math.random()) * 0xffffff.toString(16);


//		Fisher-Yates Shuffle (best practice)
function shuffle() {
	const deck = [...new Array(52).keys()];

	for (let i = deck.length - 1; i > 0; i--) {

		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	return deck;
}


// Find age between Dates 

let today = new Date();
let yearInMs = 1000 * 60 * 60 * 24 * 365;

function getAge(user) {
	let result = today - user.DOB;
	let age = Math.trunc(result / yearInMs);
	console.log(age);
}

