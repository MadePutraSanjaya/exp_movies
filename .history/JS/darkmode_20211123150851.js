var html = $("html")

$(function darkmode() {
    $(".toggle").click(function() {
        if (html.hasClass("dark-mode")) {
            html.removeClass("dark-mode");
            // mengatur local storage dengan value "false" :
            localStorage.setItem("dark-mode", false);
        }

        else {
            html.addClass("dark-mode");
            
            localSotrage.setItem("dark-mode", true);
        }
    })
})
        


if (localStorage.getItem("dark-mode") == "true") {
	$(" html").addClass("dark-mode");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidepicture");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}