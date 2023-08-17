import { STRING, INTEGER } from "sequelize";
import { connection } from "../database/connect";

const Reviews = connection.define(
  "reviews",
  {
    movieId: {
      type: INTEGER,
      allowNull: false,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Reviews.sync({ alter: true });

export default Reviews;
