import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  database: "ticriticam",
  username: "root",
  password: "Vu3toreact..",
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
