import { Sequelize } from "sequelize";
import "dotenv/config";

export const connection = new Sequelize({
  dialect: "mysql",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
});

async function connect() {
  try {
    await connection.authenticate();
    console.log("Database connection successfully");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}

export default connect;
