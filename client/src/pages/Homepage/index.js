// Homepage code here

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dogs1 from "../../assets/images/dogs1.png";
import dogs3 from "../../assets/images/dogs3.png";
import dogs6 from "../../assets/images/dogs6.png";



function Homepage() {
  <style jsx>{`
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
  `}</style>;

  return (
    <div class="homepage justify-content-center">
      <h1 class="title">
        Anything is Pawsible if You Just Believe &nbsp;
        <i class="fas fa-paw"></i>
      </h1>

      <br />
      <div class="slideshow-container">
        <div class="petSlides fade">
          <img class="slides-pic" src={dogs1} />
          <div class="text ">Find Me A Forever Home</div>
        </div>

        {/* <div class="petSlides fade">
          <img class="slides-pic" src={dogs6} />
          <div class="text">Adopt Me Meow</div>
        </div>

        <div class="petSlides fade">
          <img src={dogs3} />
          <div class="text">Pawsitivity</div>
        </div> */}
      </div>
      <br />
      <div class="dotss">
        {/* <div style={{text-align :center}}> */}
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
      <div class="dotss">
        <div class="dropdown">
          <button class="dropbtn">Choose Your Pet</button>
          <div class="dropdown-content">
            <a href="/cats">
              Cats<i class="fas fa-cat"></i>
            </a>
            <a href="/dogs">
              Dogs<i class="fas fa-dog"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Homepage;
