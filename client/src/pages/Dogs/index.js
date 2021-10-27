// Dog Section

import React, { useEffect, useState } from "react";

const petfinder = require("@petfinder/petfinder-js"); // Petfinder

// Globals
const api_key = "iEi7zznBCnZgykZhogUiQVMBVvCszCqyWb3C96dCLAeRnVySXK"; // Petfinder Key
const api_secret = "0DWQGue3dl1r1CBvs9NmT31IzKKMcNqTqPCYfpPl"; // Petfiner Secret
const pageType = "Dog";
const fillerIMG = require("../../assets/images/paws.jpg");

// Setup Petfinder API Client
const pfClient = new petfinder.Client({ apiKey: api_key, secret: api_secret });

// Array which will query and save a cats array of cats
async function dogData() {
  // Use petfinder client to make a query by type
  const res = await pfClient.animal.search({
    type: pageType,
  });

  // Check if response exists
  if (!res) return false;

  // Then set the data
  const searchResults = res.data.animals;

  // Create an Array we will load our cats into
  const dogs = [];
  for (let i = 0; i < 10; i++) {

    if (!searchResults[i].primary_photo_cropped) {
      const currentDog = {
        age: searchResults[i].age,
        breed: searchResults[i].breeds.primary,
        description: searchResults[i].description,
        image: fillerIMG,
        link: searchResults[i].url,
        name: searchResults[i].name,
      };
      dogs.push(currentDog);

    } else {
      const currentDog = {
        age: searchResults[i].age,
        breed: searchResults[i].breeds.primary,
        description: searchResults[i].description,
        image: searchResults[i].primary_photo_cropped.small,
        link: searchResults[i].url,
        name: searchResults[i].name,
      };
      dogs.push(currentDog);

    }
  }
  console.log(dogs);
  return dogs;
}

const DogCards = () => {
  const [loading, setLoading] = useState(false);
  const [dogArray, setDogArray] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const dogs = await dogData();
      setDogArray(dogs);
    }
    fetchData();

  }, []);

  return (
    <div className="dogscards row justify-content-center">
      <h1 className="dogs">Dogs</h1>

      {loading ? (
        dogArray.map((dog, i) => {
          return (
            <div className="dogs-cards" key={i}>
              <img
                className="img-dogs"
                src={process.env.PUBLIC_URL + dog.image}
                alt="Dogs Profiles"
              />
              <br />

              <div class="card-text">
                <h2>{dog.name}</h2>
                <h3>{dog.description}</h3>
                <h3>{dog.breed}</h3>
                <h3>{dog.age}</h3>
                <a href={dog.link} target="_blank" alt="Link to dogs page">
                  Link
                </a>
                <button className="btn-fav">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DogCards;
