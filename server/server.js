//TODO: setup a server

//imports
import express from "express";

import cors from "cors";

import { db } from "./dbConnection.js";

const app = express();

//configs
app.use(cors());
app.use(express.json());

//port
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

//root route
app.get("/", (req, res) => {
  res.json({ message: "FOR THE EMPEROR!" });
});

//========================================================================

//TODO: a route to READ data from the database

//TODO: a route to CREATE data in the database
