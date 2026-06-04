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
    const { livroId, nomeAluno, devolvido } = req.body;
    const randomUUID = crypto.randomUUID();

    const index = database.books.find((index) => {
      return index.id === livroId;
    });

    const lending = {
      id: randomUUID,
      livroId: livroId,
      nomeAluno: nomeAluno,
      dataEmprestimo: new Date(),
      devolvido: false,
    };

    await database.loans.push(lending);
    console.log(database.loans);

    return res.status(201).json(lending);
  }
}
