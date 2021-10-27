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
  // // create state to hold saved petId values
  // const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());
  // // Use petfinder client to make a query by type

  // // define savePet with mutation
  // const [savePet, { error }] = useMutation(SAVE_PET);

  // useEffect(() => {
  //   return () => savePetIds(savedPetIds);
  // });

  const res = await pfClient.animal.search({
    type: pageType,
  });

  // Check if response exists
  if (!res) return false;

  // Then set the data
  const searchResults = res.data.animals;

  // Create an Array we will load our cats into
  const dogs = [];
  for (let i = 0; i < searchResults.length; i++) {
    if (!searchResults[i].primary_photo_cropped) {
      const currentDog = {
        petId: searchResults[i].id,
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
        petId: searchResults[i].id,
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

  // // create function to handle saving a pet to our database
  // const handleSavePet = async (petId) => {
  //   // find the pet in `cats/dogs` state by the matching id
  //   const petToSave = dogArray.find((pet) => pet.petId === petId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await savePet({
  //       variables: { input: petToSave },
  //     });

  //     if (error) {
  //       throw new Error("something went wrong!");
  //     }

  //     // if pet successfully saves to user's account, save pet id to state
  //     setSavedPetIds([...savedPetIds, petToSave.petId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
                <h3>
                  Name: <span className="span-style">{dog.name}</span>
                </h3>
                <h3>
                  Description:{" "}
                  <span className="span-style">{dog.description}</span>
                </h3>
                <h3>
                  Breed: <span className="span-style">{dog.breed}</span>
                </h3>
                <h3>
                  Age Category: <span className="span-style">{dog.age}</span>
                </h3>
                <a
                  className="d-flex flex-column link-style"
                  href={dog.link}
                  target="_blank"
                  alt="Link to dogs page"
                >
                  Click here for more info!
                </a>
                <button className="btn-fav fav-btn-style">
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
