import { Router } from "express";
import { LoanController } from "../controllers/loan.controllers.js";

export const loanRouter = Router();
export const loanController = new LoanController();

loanRouter.get("/loan", (req, res) => loanController.list(req, res));
loanRouter.post("/loan", (req, res) => loanController.create(req, res));
loanRouter.patch("/loan/:id/devolution", (req, res) => loanController.update(req, res));