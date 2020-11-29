import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $username: String!
    $password: String!
    $isAdmin: Boolean!
  ) {
    createUser(
      newUser: {
        email: $email
        username: $username
        password: $password
        isAdmin: $isAdmin
      }
    ) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $email: String!
    $username: String!
    $password: String!
    $isAdmin: Boolean!
  ) {
    createUser(
      newUser: {
        email: $email
        username: $username
        password: $password
        isAdmin: $isAdmin
      }
    ) {
      id
    }
  }
`;

export const GET_USER = gql`
  query user($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      isAdmin
    }
  }
`;

export const GET_USERS = gql`
  query users {
    getAllUsers {
      id
      email
      name
      isAdmin
    }
  }
`;
