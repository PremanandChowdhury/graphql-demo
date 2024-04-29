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
      return db.authors.find((author) => this.authors.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
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
