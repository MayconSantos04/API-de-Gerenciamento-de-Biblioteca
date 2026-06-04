import { Router } from "express";
import { LoanController } from "../controllers/loan.controllers.js";

export const loanRouter = Router();
export const loanController = new LoanController();

loanRouter.get("/books/loan", (req, res) => loanController.list(req, res));
loanRouter.post("/books/loan", (req, res) => loanController.create(req, res));
loanRouter.patch("/books/loan/:id/devolution", (req, res) => loanController.update(req, res));