import { Router } from "express";

import homeController from "../controllers/home";

const homeRouter = Router();

homeRouter.get("/", homeController.index);

export default homeRouter;
