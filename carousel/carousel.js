var slideIndex = 1;
showSlides(slideIndex)
function goTo(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  slidesDOM = document.getElementsByClassName('slide');
  dotsDOM = document.getElementsByClassName('dot');
  if (n > slidesDOM.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slidesDOM.length }
  for (i = 0; i < slidesDOM.length; i++) {
    slidesDOM[i].style.display = "none";
  }
  for (i = 0; i < dotsDOM.length; i++) {
    dotsDOM[i].className = dotsDOM[i].className.replace(" active", "");
  }
  slidesDOM[slideIndex - 1].style.display = 'block';
  dotsDOM[slideIndex - 1].className += ' active';
} 
