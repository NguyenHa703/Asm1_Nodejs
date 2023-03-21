import express from "express";
import routerUser from "./router/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", routerUser);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});