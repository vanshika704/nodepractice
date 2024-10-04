import express from "express";
import dotenv from "dotenv"; 
import { connectmongo } from "./db/db.js";
dotenv.config(); 

const app = express();
const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});
connectmongo();
app.get('/', (req, res) => {
  res.send("Hello from the server");
});

