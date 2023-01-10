import express from "express";
import TestRouters from "./routes/test.js";
const app = express();

app.use(express.json());

app.use("/api/test", TestRouters);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend running");
});
