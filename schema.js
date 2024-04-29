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
  reviews: [Review!]
}

type Review {
  id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
}

type Author {
  id: ID!
  name: String!
  verified: Boolean!
  reviews: [Review!]
}


type Query {
  reviews: [Review] 
  review(id: ID!): Review
  games: [Game]
  game(id: ID!): Game 
  authors: [Author]
  author(id: ID!): Author
}

type Mutation {
  addGame(game: AddGameInput!): Game
  deleteGame(id: ID!): [Game]
  updateGame(id: ID!, edits: EditGameInput) : Game
}

input AddGameInput {
  title: String!,
  platform: [String!]!
}

input EditGameInput {
  title: String,
  platform: [String!]
}

`;
