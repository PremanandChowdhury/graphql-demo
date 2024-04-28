/**
 * TYPES PROVIDED BY GRAPHQL
 *
 * int- whole numbers
 * float - decimal number
 * sting - for string type of data
 * boolean - boolean type of data
 * ID - special data type for ID provided by graphql
 *
 * We can also build types on top of this
 */

export const typeDefs = `#graphql
# For making array of something, we wrap square bracket around it
# example - [strings]
# For making required, we use '!'

type Game {
  id: ID!
  title: String!
  platform: [String!]!
}

type Review {
  id: ID!
  rating: String!
  content: String!
}

type Author {
  id: ID!
  name: String!
  verified: Boolean!
}


type Query {
  reviews: [Review] 
  games: [Game]
  authors: [Author]
}

`;
