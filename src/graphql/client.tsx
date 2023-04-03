import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.29.75:9002/graphql",
  cache: new InMemoryCache()
})

export default client;