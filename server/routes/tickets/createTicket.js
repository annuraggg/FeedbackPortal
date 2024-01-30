import express from "express";
import validateToken from "../../middlewares/validateToken.js";
import { body } from "express-validator";
import client from "../../providers/postgreProvider.js";
import logger from "../../providers/winstonProvider.js";

const router = express.Router();

router.post(
  "/",
  validateToken,
  body("category").isAlpha().not().isEmpty(),
  body("description").not().isEmpty(),
  async (req, res) => {
    if (req.user.role !== "student")
      return res.status(403).json({ error: "Unauthorized" });

    const { category, description } = req.body;

    client.query(
      "INSERT INTO tickets (student_mid, category, description) VALUES ($1, $2, $3)",
      [req.user.mid, category, description],
      (err) => {
        if (err) {
          console.log(err);
          logger.error("Error in creating ticket: " + err.message);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        return res.status(200).json({ message: "Ticket created" });
      }
    );
  }
);

export default router;
