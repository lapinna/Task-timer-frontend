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
    mutation RegisterUser($input: RegisterInput!) {
      registerUser(input: $input) {
        username
        email
        password
        confirmPassword
        }
      }
    `,

    LOGIN_USER: gql`
    mutation LoginUser($input: LoginInput!) {
      loginUser(input: $input) {
        userId
        username
        token
        tokenExpire
        }
      }
    `
  },
};
