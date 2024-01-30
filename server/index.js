import express from "express"
const app = express();
import login from "./routes/login.js"
import tickets from "./routes/tickets/main.js"
import bodyParser from "body-parser";
import dotenv from "dotenv";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/auth", login)
app.use("/tickets", tickets)

app.listen(3000)
