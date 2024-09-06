import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import "./bot.js";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

dotenv.config();

// Initialized Supabase client
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Created an executable schema from type definitions and resolvers
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Yoga instance
const yoga = createYoga({
  schema: executableSchema,
  cors: {
    origin: "*",
    credentials: true,
  },
});

// Created an HTTP server and pass the Yoga instance as a handler
const server = createServer(yoga);

// Starting the server
server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
