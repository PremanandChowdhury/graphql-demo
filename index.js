import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// IMPORT THE TYPES
import { typeDefs } from './schema';

// SETTING UP THE SERVER
const server = new ApolloServer({
  // typeDefs - DEFINITION OF TYPES OF DATA [EX. DATA, GAME etc]
  typeDefs,
  // resolvers
});

// STARTING THE SERVER
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port 4000`);
