import express from "express";
import RoleController from "../controller/role.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = new RoleController();
  const response = await controller.createRole(req.body);
  return res.send(response);
});



export default router;