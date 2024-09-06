import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getUser(email: String!): User
  }

  type Mutation {
    tapCoin(email: String!): String
  }

  type User {
    id: ID!
    email: String!
    coins: Int!
  }
`;
