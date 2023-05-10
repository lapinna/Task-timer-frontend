import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "http://localhost:4000"
});

const errorLink = onError(({ graphQLErrors }) => {
  if(graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      alert(`${message}`);
    })
  }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
      "Authorization": token ? `Bearer ${token}` : ""
    }
  }
})

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});