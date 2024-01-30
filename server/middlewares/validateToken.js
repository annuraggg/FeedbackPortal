import jwt from "jsonwebtoken";
import logger from "../providers/winstonProvider.js";

const validateToken = (req, res, next) => {
  const tokenString = req.headers["authorization"];
  const token = tokenString && tokenString.split(" ")[1];

  if (!token) {
    logger.error("Token not found");
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      logger.error("Invalid token: ", token);
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};

export default validateToken;
