import { gql } from "@apollo/client";

export default {
  Mutations: {
    CREATE_TASK: gql`
    mutation CreateTask($userId: String!, $title: String!) {
      createTask(userId: $userId, title: $title) {
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
  },
};