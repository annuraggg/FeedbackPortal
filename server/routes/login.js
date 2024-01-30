import express from "express";
import pgClient from "../providers/postgreProvider.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import logger from "../providers/winstonProvider.js";
import jwt from "jsonwebtoken";
import validateToken from "../middlewares/validateToken.js";

const router = express.Router();

router.post(
  "/",
  body("mid").isNumeric(),
  body("password").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Invalid credentials", errors });
    }

    const { mid, password } = req.body;

    try {
      const query = {
        text: "SELECT * FROM users WHERE mid = $1",
        values: [mid],
      };

      const result = await pgClient.query(query);

      if (result.rows.length > 0) {
        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          console.log(process.env.JWT_SECRET)
          const token = jwt.sign(
            { mid: user.mid, fName: user.firstName, lName: user.lastName, email: user.email, role: user.role},
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({success: true, token });
        } else {
          return res.status(401).json({ error: "Invalid credentials" });
        }
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      logger.error("Error in Auth", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
