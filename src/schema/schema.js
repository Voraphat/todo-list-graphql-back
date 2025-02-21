import { buildSchema } from 'graphql';

// const schema = buildSchema(`
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//     age: Int
//   }

//   type Query {
//     getUsers: [User]
//     getUser(id: ID!): User
//   }

//   type Mutation {
//     addUser(name: String!, email: String!, age: Int): User
//   }
// `);

// export default schema;

const schema = buildSchema(`
  type Todo {
    id: ID!
    text: String!
    status: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: ID!): Todo
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: ID! ,status: String!): Todo
    deleteTodo(id: ID!): Todo
    addUser(name: String!, email: String!, age: Int): User
  }
`);

export default schema;
