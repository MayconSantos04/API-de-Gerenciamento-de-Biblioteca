import { Router } from "express";
import { BookController } from "../controllers/book.controllers.js";

export const bookRouter = Router();
export const bookController = new BookController();

bookRouter.get("/books", (req, res) => bookController.list(req, res));
bookRouter.get("/books/:id", (req, res) => bookController.listId(req, res));
bookRouter.post("/books", (req, res) => bookController.create(req, res));
bookRouter.patch("/books/:id", (req, res) => bookController.updateBook(req, res));
bookRouter.put("/books/:id", (req, res) => bookController.update(req, res));
bookRouter.delete("/books/:id", (req, res) => bookController.remove(req, res));
