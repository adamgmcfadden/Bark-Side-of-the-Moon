// import dependencies -- apollo client
import { gql } from "@apollo/client";



// queries code here
export const QUERY_CHECKOUT = gql`
  query getCheckout($animals: [ID]!) {
    checkout(animals: $animals) {
      session
    }
  }
`;

// export GET_ME query
export const GET_ME = gql`
  {
    me {
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
      donations
    }
  }
`;
