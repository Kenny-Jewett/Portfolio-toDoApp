import Router from "express";

import { addToDo, deleteToDoById, getTest, getToDoById, getToDos } from "../controllers/toDoController.js";

const router = Router();

router.get("/hello", getTest);

router.get("/todo", getToDos);

router.get("/todo/:id", getToDoById);

router.delete("/todo/:id", deleteToDoById);

router.post("/todo", addToDo);

export default router;