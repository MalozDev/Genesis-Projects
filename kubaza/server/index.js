const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/kubaza";
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

// Define a GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`);

// Mock database (to be replaced with MongoDB models)
let users = [];

// Root resolver
const root = {
  hello: () => "Hello, GraphQL!",
  users: () => users,
  addUser: ({ name, email }) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
  },
};

// Initialize Express
const app = express();

// GraphQL Endpoint
app.use(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
