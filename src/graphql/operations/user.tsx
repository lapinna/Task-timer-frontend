import { gql } from "@apollo/client";

export default {
  Queries: {
    CURRENT_USER: gql`
    query CurrentUser {
      currentUser {
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
        }
      }
    `
  },
};
