import Router from "express";

import { getTest } from "../controllers/toDoController.js";

const router = Router();

router.get("/hello", getTest);


export default router;