// Cats Section

import React from "react";
const petfinder = require("@petfinder/petfinder-js"); // Petfinder


// Globals
const api_key = "iEi7zznBCnZgykZhogUiQVMBVvCszCqyWb3C96dCLAeRnVySXK"; // Petfinder Key
const api_secret = "0DWQGue3dl1r1CBvs9NmT31IzKKMcNqTqPCYfpPl"; // Petfiner Secret
const pageType = "Cat";
const fillerIMG = require("../../assets/images/paws.jpg");

// Setup Petfinder API Client
const pfClient = new petfinder.Client({ apiKey: api_key, secret: api_secret });

function catCards() {
  const newCatData = [];

  // Array which will query and save a cats array of cats
  function catData() {
    // Use petfinder client to make a query by type
    pfClient.animal
      .search({
        type: pageType,
      })
      .then((res) => {
        // Check if response exists
        if (!res) return false;

        // Then set the data
        const searchResults = res.data.animals;

        //console.log(searchResults);

        // Create an Array we will load our cats into
        const cats = [];
        for (let i = 0; i < searchResults.length; i++) {
          if (!searchResults[i].primary_photo_cropped) {
            let currentCat = {
              name: searchResults[i].name,
              description: searchResults[i].description,
              breed: searchResults[i].breeds.primary,
              age: searchResults[i].age,
              link: searchResults[i].url,
              image: fillerIMG,
            };
            newCatData.push(currentCat);
          } else {
            let currentCat = {
              name: searchResults[i].name,
              description: searchResults[i].description,
              breed: searchResults[i].breeds.primary,
              age: searchResults[i].age,
              link: searchResults[i].url,
              image: searchResults[i].primary_photo_cropped.small,
            };
            newCatData.push(currentCat);
          }
        }
        return cats;
      });
  }
  catData();
  console.log(newCatData);
  return (
    <div className="catscards row justify-content-center">
      <h1 className="cats">Cats</h1>
      {newCatData.map((cats) => {
        return (
          <div className="cats-cards">
            <img
              className="img-cats"
              src={process.env.PUBLIC_URL + cats.image}
              alt="Cats Profiles"
            />

                //console.log(searchResults);

                // Create an Array we will load our cats into
                const cats = [];
                for (let i = 0; i < searchResults.length; i++) {
                    if (!searchResults[i].primary_photo_cropped) {
                        let currentCat =
                        {
                            name: searchResults[i].name,
                            description: searchResults[i].description,
                            breed: searchResults[i].breeds.primary,
                            age: searchResults[i].age,
                            link: searchResults[i].url,
                            image: fillerIMG
                        };
                        newCatData.push(currentCat);
                    } else {
                        let currentCat =
                        {
                            name: searchResults[i].name,
                            description: searchResults[i].description,
                            breed: searchResults[i].breeds.primary,
                            age: searchResults[i].age,
                            link: searchResults[i].url,
                            image: searchResults[i].primary_photo_cropped.small
                        };
                        newCatData.push(currentCat);
                    }
                }
                return cats;
            })
    }
    catData();
    console.log(newCatData);
    return (
        <div className="catscards row justify-content-center" >
            <h1 class="cats">Cats</h1>
            {newCatData.map((cats) => {
                return (
                    <div class="cats-cards">
                        <img class="img-cats" src={process.env + cats.image} alt="Cats Profiles" />

                        <br />
                        <div class="card-text">
                            <h2>{cats.name}</h2>
                            <h3>{cats.description}</h3>
                            <h3>{cats.breed}</h3>
                            <h3>{cats.age}</h3>
                            <a href={cats.link} target="_blank" alt="Link to cats page"> Link</a>
                            <button class="btn-fav"><i class="fas fa-heart"></i></button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default catCards;
