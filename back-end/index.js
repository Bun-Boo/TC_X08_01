import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRouters from "./routes/todos.js";
const app = express();
dotenv.config();

const connect = () =>
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      throw err;
    });
mongoose.set("strictQuery", true);
app.use(express.json());

app.use("/api/todos", todoRouters);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Error";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 5000, () => {
  connect();
  console.log("Backend running");
});
