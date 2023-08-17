import express from "express";
import connect from "./database/connect";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect();

app.listen(4000, () =>
  console.log(`App up and running on http://localhost:4000`)
);
