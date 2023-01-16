import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routers/Auth.js";
import userRouter from "./routers/User.js"
import dotenv from "dotenv";
import todoRouters from "./routers/todos.js"
const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json())

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
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);

app.get("/",(req,res) => {
  res.send("Home Page")
})

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Error";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 3000, () => {
  connect();
  console.log("Backend running");
});
