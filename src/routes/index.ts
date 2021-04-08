import express from "express";
import UserRouter from "./user.router";
import AdressRouter from "./adress.router";
import RoleRouter from "./role.router";

const router = express.Router();

router.use("/users", UserRouter);
router.use("/adress", AdressRouter);
router.use("/role", RoleRouter);

export default router;