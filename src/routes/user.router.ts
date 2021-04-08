import express from "express";
import UserController from "../controller/user.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
});

export default router;