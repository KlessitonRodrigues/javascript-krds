import { Router } from "express";

import homeController from "../controllers/home";

const homeRouter = Router();

homeRouter.get("/", homeController.getList);

export default homeRouter;
