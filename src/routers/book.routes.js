import { Router } from "express";
import { BookController } from "../controllers/book.controllers.js";

export const bookRouter = Router();
export const bookController = new BookController();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Lista todos os livros
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   titulo:
 *                     type: string
 *                   autor:
 *                     type: string
 *                   genero:
 *                     type: string
 *                   disponivel:
 *                     type: boolean
 */
bookRouter.get("/books", (req, res) => bookController.list(req, res));

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Busca um livro pelo ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 */
bookRouter.get("/books/:id", (req, res) => bookController.listId(req, res));

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Cria um novo livro
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - autor
 *               - genero
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 titulo:
 *                   type: string
 *                 autor:
 *                   type: string
 *                 genero:
 *                   type: string
 *                 disponivel:
 *                   type: boolean
 *       400:
 *         description: Dados inválidos (campos obrigatórios faltando)
 */
bookRouter.post("/books", (req, res) => bookController.create(req, res));

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Atualiza um livro
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               titulo: "Novo título"
 *               autor: "Novo autor"
 *               genero: "Novo gênero"
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       404:
 *         description: Livro não encontrado
 */
bookRouter.put("/books/:id", (req, res) => bookController.update(req, res));

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Remove um livro
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro removido com sucesso
 *       400:
 *         description: Livro não encontrado
 */
bookRouter.delete("/books/:id", (req, res) => bookController.remove(req, res));
