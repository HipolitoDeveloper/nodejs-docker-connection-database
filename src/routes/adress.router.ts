import express from "express";
import AdressController from "../controller/adress.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = new AdressController();
  const response = await controller.createAdress(req.body);
  return res.send(response);
});

router.get("/:userId", async (req, res) => {
  const controller = new AdressController();
  const response = await controller.getAdresses(req.params.userId);
  if (!response) res.status(404).send({ message: "Não foram encontrados endereços para o seu usuário" });
  return res.send(response);
});

export default router;