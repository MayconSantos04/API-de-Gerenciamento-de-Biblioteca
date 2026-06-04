import { Router } from "express";
import { LoanController } from "../controllers/book.controllers.js";

export const loanRouter = Router();
export const loanController = new LoanController();

bookRouter.get("/books/loan", (req, res) => bookController.list(req, res));
bookRouter.post("/books/loan", (req, res) => bookController.create(req, res));
bookRouter.patch("/books/loan/:id/devolution", (req, res) => bookController.update(req, res));