/*
 * https://www.w3schools.com/howto/howto_js_lightbox.asp
 */

// Open the Modal
var openModal = function() {
    var docModal = document.getElementById("myModal");
    if(docModal !== null) {
        docModal.style.display = "block";
    }  
};

// Close the Modal
var closeModal = function () {
    var docModal = document.getElementById("myModal");
    if(docModal !== null) {
        docModal.style.display = "none";
    }      
};

//var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
var plusSlides = function (n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
var currentSlide = function (n) {
  showSlides(slideIndex = n);
};

var showSlides = function (n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
};
