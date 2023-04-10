import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const url = "https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql"

const client = new ApolloClient({
  link: new HttpLink({
    uri: url, headers: {
      "x-api-key": "da2-psmv7fcrw5dlpmp5orner2xf7i"
    }, fetch
  }),
  cache: new InMemoryCache()
})

export default client;