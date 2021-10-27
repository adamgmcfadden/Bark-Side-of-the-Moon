// Cats Section

import React, { useEffect, useState } from "react";

const petfinder = require("@petfinder/petfinder-js"); // Petfinder

// Globals
const api_key = "iEi7zznBCnZgykZhogUiQVMBVvCszCqyWb3C96dCLAeRnVySXK"; // Petfinder Key
const api_secret = "0DWQGue3dl1r1CBvs9NmT31IzKKMcNqTqPCYfpPl"; // Petfiner Secret
const pageType = "Cat";
const fillerIMG = require("../../assets/images/paws.jpg");

// Setup Petfinder API Client
const pfClient = new petfinder.Client({ apiKey: api_key, secret: api_secret });

// Array which will query and save a cats array of cats
async function catData() {
  // Use petfinder client to make a query by type
  const res = await pfClient.animal.search({
    type: pageType,
  });
  // Check if response exists
  if (!res) return false;

  // Then set the data
  const searchResults = res.data.animals;

  //console.log(searchResults);

  // Create an Array we will load our cats into
  const cats = [];
  for (let i = 0; i < 10; i++) {
    const catName = searchResults[i].name;
    console.log(catName);

    if (!searchResults[i].primary_photo_cropped) {
      const currentCat = {
        age: searchResults[i].age,
        breed: searchResults[i].breeds.primary,
        description: searchResults[i].description,
        image: JSON.stringify(fillerIMG),
        link: searchResults[i].url,
        name: searchResults[i].name,
      };
      //const stringCat = JSON.stringify(currentCat);

      cats.push(currentCat);
    } else {
      const currentCat = {
        age: searchResults[i].age,
        breed: searchResults[i].breeds.primary,
        description: searchResults[i].description,
        image: searchResults[i].primary_photo_cropped.small,
        link: searchResults[i].url,
        name: catName,
      };
      //const stringCat = JSON.stringify(currentCat);

      cats.push(currentCat);
    }
  }
  console.log(cats);
  return cats;
}

const CatCards = () => {
  const [loading, setLoading] = useState(false);
  const [catArray, setCatArray] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const cats = await catData();
      setCatArray(cats);
    }
    fetchData();
  }, []);

  return (
    <div className="catscards row justify-content-center">
      <h1 className="cats">Cats</h1>

      {loading ? (
        catArray.map((cat, i) => {
          return (
            <div className="cats-cards" key={i}>
              <img
                className="img-cats"
                src={process.env.PUBLIC_URL + cat.image}
                alt="Cats Profiles"
              />
              <br />

              <div class="card-text">
                <h3 className="card-subject">
                  Name: <span className="text-span">{cat.name}</span>
                </h3>
                <h3 className="card-subject">
                  Description:{" "}
                  <span className="text-span">{cat.description}</span>
                </h3>
                <h3 className="card-subject">
                  Breed: <span className="text-span">{cat.breed}</span>
                </h3>
                <h3 className="card-subject">
                  Status: <span className="text-span">{cat.age}</span>
                </h3>
                <a
                  className="d-flex flex-column link-style"
                  href={cat.link}
                  target="_blank"
                  alt="Link to cats page"
                >
                  Click for more info!
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

export default CatCards;
