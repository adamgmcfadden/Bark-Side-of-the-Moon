// import gql dependency
const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedPet(input: savedPet!): User
    removePet(petId: String!): User
  }
  type User {
    _id: ID!
    username: String
    email: String
    petCount: Int
    savedPet: [Pet]
  }
  type Pet {
    petId: String
    name: String
    breed: String
    description: String
    image: String
    link: String
  }
  input savedPet {
    name: String
    breed: String
    description: String
    petId: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs to index.js
module.exports = typeDefs;
