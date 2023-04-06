import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://192.168.29.75:9002/graphql", fetch }),
  cache: new InMemoryCache()
})

export default client;