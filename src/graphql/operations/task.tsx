import { gql } from "@apollo/client";

export default {
  Query: {
    GET_TASKS: gql`
    query GetTasks($userId: String!) {
      getTasks(userId: $userId) {
        id
        title
        author
        timeSpent
        createdAt
      }
    }
    `,
  },
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