import { InMemoryCache, ApolloLink } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { withClientState } from "apollo-link-state";

// import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

// const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const localStateLink = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: "Auth",
      isLoggedIn: Boolean(localStorage.getItem("jwt")),
    },
  },
  resolvers: {
    Mutation: {
      logUserIn: (_, { token }, { cache }) => {
        localStorage.setItem("jwt", token);
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: true,
            },
          },
        });
        return null;
      },
      logUserOut: (_, __, { cache }) => {
        localStorage.removeItem("jwt");
        cache.writeData({
          data: {
            __typename: "Auth",
            isLoggedIn: false,
          },
        });
        return null;
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([localStateLink]),
});

export default client;
