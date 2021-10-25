// Homepage code here

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Homepage() {
  // var slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  // function showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("petSlides");
  //   var dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // }
  return (
    <div class="homepage justify-content-center">
      <h1>
        <i class="fas fa-paw"></i>Anything is Pawsible if You Just Believe
        <i class="fas fa-paw"></i>
      </h1>

      <br />
      <div class="slideshow-container">
        <div class="petSlides fade">
          <img src="../assets/images/dogs1.png" />
          <div class="text ">Find Me A Forever Home</div>
        </div>

        <div class="petSlides fade">
          <img src="../assets/images/dogs6.png" />
          <div class="text">Adopt Me Meow</div>
        </div>

        <div class="petSlides fade">
          <img src="../assets/images/dogs3.png" />
          <div class="text">Pawsitivity</div>
        </div>
      </div>
      <br />
      <div>
        <div>
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
    </div>
  );
}

export default Homepage;
