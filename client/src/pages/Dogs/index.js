//  Dogs Section
import React from "react";
import { FaHeart } from "react-icons/fa";

function dogCards() {
  return (
    <div className="catscards row justify-content-center" key={i}>
      <h1 class="cats">Dogs</h1>
      {data.map((dogs, i) => {
        return (
          <div class="cats-cards">
            <img
              class="img-cats"
              src={process.env.PUBLIC_URL + dogs.image}
              alt="Dog Profiles"
            />
            <br />
            <div class="card-text">
              <h2>{cats.name}</h2>
              <h3>{cats.description}</h3>
              <h3>{dogs.breed}</h3>
              <h3>{dogs.age}</h3>
              <a href={dogs.link} target="_blank" alt="Link to dogs page">
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

export default dogCards;
