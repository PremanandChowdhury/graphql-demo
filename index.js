import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// IMPORT DB
import db from './_db.js'

// IMPORT THE TYPES
import { typeDefs } from './schema.js';

// RESOLVERS
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
};
/**
 * QUERY EXAMPLE
 * 
 * games {
 *  title
 * }
 */

// SETTING UP THE SERVER
const server = new ApolloServer({
  // typeDefs - DEFINITION OF TYPES OF DATA [EX. DATA, GAME etc]
  typeDefs,
  // resolvers - FUNCTIONS TO RETRIEVE DATA FOR ALL THE DATA TYPES
  resolvers,
});

// STARTING THE SERVER
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port 4000`);
