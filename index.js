import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import mongoConnection from "./config/index.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

mongoConnection();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
