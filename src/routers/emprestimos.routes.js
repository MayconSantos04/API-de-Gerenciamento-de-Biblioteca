import { Router } from "express";
import { LoanController } from "../controllers/loan.controllers.js";

export const loanRouter = Router();
export const loanController = new LoanController();

/**
 * @swagger
 * /loan:
 *   get:
 *     summary: Lista todos os empréstimos
 *     tags:
 *       - Loans
 *     responses:
 *       200:
 *         description: Lista de empréstimos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "c1f7a2d8-4f2a-4c28-8d01-1e23f1234567"
 *                   livroId:
 *                     type: string
 *                     example: "b123"
 *                   livroTitulo:
 *                     type: string
 *                     example: "Dom Casmurro"
 *                   nomeAluno:
 *                     type: string
 *                     example: "Maycon Santos"
 *                   dataEmprestimo:
 *                     type: string
 *                     format: date-time
 *                     example: "2026-07-20T13:50:45.773Z"
 *                   devolvido:
 *                     type: boolean
 *                     example: false
 */
loanRouter.get("/loan", (req, res) => loanController.list(req, res));

/**
 * @swagger
 * /loan:
 *   post:
 *     summary: Cria um empréstimo de livro
 *     tags:
 *       - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - livroId
 *               - nomeAluno
 *             properties:
 *               livroId:
 *                 type: string
 *               nomeAluno:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empréstimo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 livroId:
 *                   type: string
 *                 nomeAluno:
 *                   type: string
 *                 dataEmprestimo:
 *                   type: string
 *                   format: date-time
 *                 devolvido:
 *                   type: boolean
 *       400:
 *         description: Dados inválidos ou livro indisponível
 *       404:
 *         description: Livro não encontrado
 */
loanRouter.post("/loan", (req, res) => loanController.create(req, res));

/**
 * @swagger
 * /loan/{id}/devolution:
 *   patch:
 *     summary: Registra a devolução de um livro emprestado
 *     tags:
 *       - Loans
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do empréstimo
 *     responses:
 *       200:
 *         description: Devolução registrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 livroId:
 *                   type: string
 *                 nomeAluno:
 *                   type: string
 *                 dataEmprestimo:
 *                   type: string
 *                   format: date-time
 *                 devolvido:
 *                   type: boolean
 *       404:
 *         description: Empréstimo ou livro não encontrado
 */
loanRouter.patch("/loan/:id/devolution", (req, res) =>
  loanController.updateDevolution(req, res),
);
