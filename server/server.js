//TODO: setup a server

//imports
import express from "express";

import cors from "cors";

import { db } from "./server/dbConnection.js";

const app = express();

//configs
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

//port

//root route

//========================================================================

//TODO: a route to READ data from the database

//TODO: a route to CREATE data in the database
