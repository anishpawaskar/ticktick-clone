import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./src/config/database.js";
import indexRouter from "./src/routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectToDb();
app.use(express.json());
app.use(indexRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
