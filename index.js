import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// SETTING UP THE SERVER
const server = new ApolloServer({
  // typeDefs
  // resolvers
});

// STARTING THE SERVER
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port 4000`);
