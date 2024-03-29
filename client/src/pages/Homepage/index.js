// Homepage code here
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dogs1 from "../../assets/images/dogs1.png";
//import dogs3 from "../../assets/images/dogs3.png";
//import dogs6 from "../../assets/images/dogs6.png";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";

function Homepage() {
  return (
    <div className="homepage justify-content-center">
      <h1 className="title">
        Anything is Pawsible if You Just Believe &nbsp;
        <i className="fas fa-paw"></i>
      </h1>

      <br />
      <div className="slideshow-container">
        <div className="petSlides fade">
          <img className="slides-pic" src={dogs1} />
          <div className="text ">Find Me A Forever Home</div>
        </div>

        {/*

        <div className="petSlides fade">
          <img className="slides-pic" src={dogs6} />
          <div className="text">Adopt Me Meow</div>
        </div>

        <div className="petSlides fade">
          <img src={dogs3} />
          <div className="text">Pawsitivity</div>
        </div>
      </div>
      <br />
      <div className="dotss">
        {/* <div style={{text-align :center}}> */}
        {/* <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span> */}
      </div>

      <div className="dotss">
        <div className="dropdown">
          <button className="dropbtn">Choose Your Pet</button>
          <div className="dropdown-content">
            <a href="/cats">
              <FaCat /> &nbsp; Cats
            </a>
            <a href="/dogs">
              <FaDog /> &nbsp; Dogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
