import express from "express";
import createTicket from "./createTicket.js";
const app = express();

const router = express.Router();

router.use("/create", createTicket)

export default router;



