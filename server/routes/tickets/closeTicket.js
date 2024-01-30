import express from "express";
import validateToken from "../../middlewares/validateToken.js";
import client from "../../providers/postgreProvider.js";

const router = express.Router();

router.post("/", validateToken, async (req, res) => {
  let closedBy = null;

  if (req.user.role === "student") closedBy = "student";
  else closedBy = "staff";

  client.query(
    `UPDATE tickets SET ${closedBy === "student" ? "student_resolved" : "staff_resolved"}  = TRUE, where ticket_id = $1`,
    [req.body.ticket_id],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      return res.status(200).json({ message: "Ticket closed" });
    }
  );
});
