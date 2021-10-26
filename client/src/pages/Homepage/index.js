// Homepage code here
import "./homepage.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /* <script>
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
  var slides = document.getElementsByClassName("petSlides");
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
</script> */
}

function Homepage() {
  return (
    <div class="homepage justify-content-center">
      <h1>
        <i class="fas fa-paw"></i>Anything is Pawsible if You Just Believe
        <i class="fas fa-paw"></i>
      </h1>

      <br />
      <div class="slideshow-container">
        <div class="petSlides fade">
          <img
            src="../../Lakyn/Bark-Side-of-the-Moon/client/src/assets/images/dogs1.png"
            // style="width:100%"
          />
          <div class="text ">Find Me A Forever Home</div>
        </div>

        <div class="petSlides fade">
          <img
            src="../../Lakyn/Bark-Side-of-the-Moon/client/src/assets/images/dogs6.png"
            // style="width:100%"
          />
          <div class="text">Adopt Me Meow</div>
        </div>

        <div class="petSlides fade">
          <img
            src="../../Lakyn/Bark-Side-of-the-Moon/client/src/assets/images/dogs3.png"
            // style="width:100%"
          />
          <div class="text">Pawsitivity</div>
        </div>
      </div>
      <br />
      <div>
        {/* <div style={{text-align :center}}> */}
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Choose Your Pet</button>
        <div class="dropdown-content">
          <a href="#">
            Cats<i class="fas fa-cat"></i>
          </a>
          <a href="#">
            Dogs<i class="fas fa-dog"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
