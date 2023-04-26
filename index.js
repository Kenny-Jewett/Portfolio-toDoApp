import express from "express";
import router from "./routes/toDoRoutes.js"
import bodyParser from "body-parser";
import cors from "cors";
import { sequelize } from "./db/index.js";



const app = express();

const port = 3080;

app.use(bodyParser.json())

app.use(cors())

sequelize.sync()
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})


app.listen(port, (req, res) =>{
    console.log(`Server is running on ${port}`)
})

app.use("/", router)










// This was moved to routes and controller
// app.get("/hello", (req, res) => {
//     res.status(201).send("Api is working: Hello")
// })

