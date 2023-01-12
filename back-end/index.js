import express from "express";
import TestRouters from "./routers/test.js";
import env from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleWare/errorMiddleware.js"
import userRoute from "./routers/User.js"

const app = express();

const dotenv = env.config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json())
// app.use(errorHandler);


app.use("/api/test", TestRouters);
app.use("/api/users",userRoute);

app.get("/",(req,res) => {
  res.send("Home Page")
})

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT,() =>{
            console.log("Server Running on port",PORT);
        })
    })
    .catch((e) =>{
        console.log("Server not Runing error on port ",PORT);
    })