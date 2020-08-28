import { Router } from "express";

import userController from "./controller/UserController";

const routes = Router();

routes.post("/user", userController.store);

routes.put("/user/:id", userController.update);
routes.get("/user/:id", userController.indexById);
routes.delete("/user/:id", userController.delete);

routes.get("/users", userController.index);

export default routes;
