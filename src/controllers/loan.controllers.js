import crypto from "node:crypto";
import { database } from "../datadb.js";

export class LoanController {
  // Lista todos os empréstimos
  async list(req, res) {
    const lend = await database.loans;
    res.send(lend);
  }

  // Cria um empréstimo
  async create(req, res) {
    const { livroId, nomeAluno } = req.body;
    const randomUUID = crypto.randomUUID();

    const book = database.books.find((book) => {
      return book.id === livroId;
    });

    const lending = {
      id: randomUUID,
      livroId: livroId,
      nomeAluno: nomeAluno,
      dataEmprestimo: new Date(),
      devolvido: false,
    };

    await database.loans.push(lending);

    return res.status(201).json(lending);
  }
}
