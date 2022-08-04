"use strict";

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

window.addEventListener('resize', function () {
  // We execute the same script as before
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}); // var upperItem2 = document.getElementsByClassName('js-vacant');
// var elNodes = document.querySelectorAll(".js-vacant");
// var applyForm = document.querySelector('.apply-popup');
// var applyCloser = document.querySelector('.apply-popup__closer');
//
// for (var i = 0; i < upperItem2.length; i++) {
//     var elem = upperItem2[i];
//     elem.addEventListener("click", function() {
//         event.preventDefault();
//         applyForm.classList.add('active');
//     });
// }
//
// if (applyCloser) {
//     applyCloser.addEventListener('click', function() {
//         event.preventDefault();
//         applyForm.classList.remove('active');
//     });
// };

var cabPopupOpener = document.querySelector('.js-cabinet-opener');
var cabPopup = document.querySelector('.header__popup');
var authPopup = document.querySelector('.popup-menu');
var cabPopupCloser = document.querySelector('.header__popup-closer');

if (cabPopupOpener) {
  cabPopupOpener.addEventListener('click', function () {
  	if (cabPopupOpener.classList.contains('logged')) {
    	cabPopup.classList.add('active');
	} else {
		authPopup.classList.add('active');
	}
  });
}

;

if (cabPopupCloser) {
  cabPopupCloser.addEventListener('click', function () {
    cabPopup.classList.remove('active');
  });
}

;