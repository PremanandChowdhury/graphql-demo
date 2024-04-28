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
      return db.games
    },
    authors() {
      return db.authors
    },
    reviews() {
      return db.reviews
    }
  }
}

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
