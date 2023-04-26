import express from "express";
import router from "./routes/toDoRoutes.js"
import bodyParser from "body-parser";
import cors from "cors";



const app = express();

const port = 3080;

app.use(bodyParser.json())

app.use(cors())

app.use("/", router)


app.listen(port, (req, res) =>{
    console.log(`Server is running on ${port}`)
})



// app.get("/hello", (req, res) => {
//     res.status(201).send("Api is working: Hello")
// })

