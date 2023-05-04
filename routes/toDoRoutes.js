import Router from "express";

import { addToDo, deleteToDoById, getSort, getTest, getToDoById, getToDoByTitle, getToDos, updateToDoById } from "../controllers/toDoController.js";

const router = Router();

router.get("/test", getTest)

router.get("/sort", getSort);

router.get("/todo", getToDos);

router.get("/todo/:id", getToDoById);

router.get("/todo/search/:search", getToDoByTitle)

router.delete("/todo/:id", deleteToDoById);

router.post("/todo", addToDo);

router.put("/todo/:id", updateToDoById)

export default router;