import "dotenv/config";
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import connectDB from "./config/db.js";
import schema from './schema/schema.js';
import userResolver from './resolvers/userResolvers.js';
import todoResolver from './resolvers/todoResolvers.js';

const app = express();
app.use(cors());

connectDB();

const root = {
  ...userResolver,
  ...todoResolver,
};

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}/graphql`));
