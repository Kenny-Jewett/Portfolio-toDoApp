import Router from "express";

import { getTest, getToDoById, getToDos } from "../controllers/toDoController.js";

const router = Router();

router.get("/hello", getTest);

router.get("/todo", getToDos);

router.get("/:id", getToDoById);

export default router;