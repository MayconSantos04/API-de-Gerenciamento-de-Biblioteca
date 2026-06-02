import { Router } from "express";
import { BookController } from "../controllers/book.controllers.js";

export const bookRouter = Router();
export const bookController = new BookController();

bookRouter.get("/books", (req, res) => BookController.list(req, res));
bookRouter.post("/books", (req, res) => BookController.create(req, res));
bookRouter.patch("/books/:id", (req, res) => BookController.update(req, res));
bookRouter.delete("/books/:id", (req, res) => BookController.remove(req, res));
