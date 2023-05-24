import { gql } from "@apollo/client";

export default {
  Mutations: {
    REGISTER_USER: gql`
    mutation RegisterUser($username: String!, $email: String!, $password: String!) {
      registerUser(username: $username, email: $email, password: $password) {
        _id
        username
        email
        password
        token
        tasks {
          id
          title
          author
          timeSpent
          createdAt
          }
        }
      }
    `,

    LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        _id
        username
        email
        password
        token
        tasks {
          id
          title
          author
          timeSpent
          createdAt
          }
        }
      }
    `
  },
};