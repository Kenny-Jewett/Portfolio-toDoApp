import { ToDo } from "../models/toDoModel.js"


export const getTest = (req, res) => {
    res.status(201).send("Api is working: Hello")
}