// import dependencies -- apollo client
import { gql } from "@apollo/client";

// LOGIN_USER mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// save pet to dashboard
export const SAVE_PET = gql`
  mutation savePet($input: savedPet!) {
    savePet(input: $input) {
      _id
      username
      email
      petCount
      savedPet {
        petId
        name
        breed
        description
        image
        link
      }
    }
  }
`;

// Add Donation 



// remove a pet from saved pets
export const REMOVE_PET = gql`
  mutation removePet($petId: String!) {
    removeBook(petId: $petId) {
      _id
      username
      email
      petCount
      savedPet {
        petId
        name
        breed
        description
        image
        link
      }
    }
  }
`;

// need to add something for donations - not sure how to build this, will work on it friday
