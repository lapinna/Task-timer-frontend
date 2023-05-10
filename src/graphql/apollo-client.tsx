import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "http://localhost:4000"
});

const authLink = setContext((_, { header }) => {
  return {
    headers: {
      ...header,
      "Access-Control-Allow-Origin": "*"
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});