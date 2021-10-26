// Cats Section
import React from "react";
import { FaHeart } from "react-icons/fa";

function catCards() {
  return (
    <div className="catscards row justify-content-center" key={i}>
      <h1 class="cats">Cats</h1>
      {data.map((cats, i) => {
        return (
          <div class="cats-cards">
            <img
              class="img-cats"
              src={process.env.PUBLIC_URL + cats.image}
              alt="Cats Profiles"
            />

            <br />
            <div class="card-text">
              <h2>{cats.name}</h2>
              <h3>{cats.description}</h3>
              <h3>{cats.breed}</h3>
              <h3>{cats.age}</h3>
              <a href={cats.link} target="_blank" alt="Link to cats page">
                {" "}
                Link
              </a>
              <button class="btn-fav">
                <FaHeart />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default catCards;
