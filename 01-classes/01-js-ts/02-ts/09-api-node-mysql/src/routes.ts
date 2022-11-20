import { Router } from "express";
import { UserController } from "./controllers/users";

const routes = Router();

// USER
routes.get("/users", UserController.listUsers);
routes.post("/users", UserController.createUser);
routes.put("/users", UserController.updateUser);
routes.delete("/users", UserController.deleteUser);

// TRANSPORT

// BRAND

export default routes;
