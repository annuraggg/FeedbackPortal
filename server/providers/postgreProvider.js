import pg from "pg";
const { Client } = pg;
import logger from "./winstonProvider.js";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "apsitFeedback",
  password: "Anurag@2004",
  port: 5432,
});

client
  .connect()
  .then(() => {
    logger.info("Connected to database");
  })
  .catch((err) => {
    logger.error("Error connecting to database", err);
  });

export default client;
