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
const catArray2 = [];


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
      for (let i = 0; i < 10; i++) {
        const catName = searchResults[i].name;
        console.log(catName);


        if (!searchResults[i].primary_photo_cropped) {
          const currentCat = {
            age: searchResults[i].age,
            breed: searchResults[i].breeds.primary,
            description: searchResults[i].description,
            //image: JSON.stringify(fillerIMG),
            link: searchResults[i].url,
            name: searchResults[i].name
          };
          //const stringCat = JSON.stringify(currentCat);

          catArray2.push(currentCat);
        } else {
          const currentCat =
          {
            age: searchResults[i].age,
            breed: searchResults[i].breeds.primary,
            description: searchResults[i].description,  
            //image: searchResults[i].primary_photo_cropped.small.val(),
            link: searchResults[i].url,
            name: catName
          };
          //const stringCat = JSON.stringify(currentCat);

          catArray2.push(currentCat);
        }
      }
      //return cats;
    });
}

function catCards() {
  catData();


  const holder = [];
  const dummy =
  {
    age: "Adult",
    breed: "Domestic Short Hair",
    description: "This is Cinnamon. She is 4 year old gal who was originally adopted as a\nkitten. Unfortunately, the family recently...",
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53382957/1/?bust=1635295589&width=300",
    link: "https://www.petfinder.com/cat/cinnamon-53382957/oh/cincinnati/hart-oh445/?referrer_id=1917ceca-bc45-468e-adfb-9373212df0dd",
    name: "Cinnamon"
  }
  const dummy2 =
  {
    age: "Adult",
    breed: "Domestic Short Hair",
    description: "This is Cinnamon. She is 4 year old gal who was originally adopted as a\nkitten. Unfortunately, the family recently...",
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53382957/1/?bust=1635295589&width=300",
    link: "https://www.petfinder.com/cat/cinnamon-53382957/oh/cincinnati/hart-oh445/?referrer_id=1917ceca-bc45-468e-adfb-9373212df0dd",
    name: "Cinnamon2"
  }

  // Holder is working array that is hard coded
  // catArray2 is working array but wont load cards

  holder.push(dummy, dummy2);
  console.log(catArray2);
  console.log(holder);

  return (
    <div className="catscards row justify-content-center">
      <h1 className="cats">Cats</h1>
      {catArray2.map((catArray, i) => {
        return (
          <div className="cats-cards" key={i}>
            <img
              className="img-cats"
              src={process.env.PUBLIC_URL + catArray.image}
              alt="Cats Profiles"
            />
            <br />

            <div class="card-text">

              <h2>{cats.name}</h2>
              <h3>{cats.description}</h3>
              <h3>{cats.breed}</h3>
              <h3>{cats.age}</h3>
              <a href={cats.link} target="_blank" alt="Link to cats page">

                Link
              </a>
              <button className="btn-fav">
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default catCards;
