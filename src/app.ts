import express from "express";
import connect from "./database/connect";
import router from "./routes";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect();

app.use(router);

app.listen(process.env.APP_PORT || 3000, () =>
  console.log(
    `App up and running on http://localhost:${process.env.APP_PORT || 3000}`
  )
);
