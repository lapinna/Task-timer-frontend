import { gql } from "@apollo/client";

export default {
  Queries: {
    ALL_USERS: gql`
    query Users {
      users {
        _id
        username
        email
        }
      }
      `,
  },

  Mutations: {
    REGISTER_USER: gql`
    mutation RegisterUser($username: String!, $email: String!, $password: String!) {
      registerUser(username: $username, email: $email, password: $password) {
        username
        email
        password
        confirmPassword
        }
      }
    `,

    LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        user{
          username
        }
        token
        tokenExpire
        }
      }
    `
  },
};
