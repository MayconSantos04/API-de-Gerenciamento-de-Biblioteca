import crypto from "node:crypto";

export class LoanController {
  datadb = [];

  // Lista todos os empréstimos
  async list(req, res) {
    const lend = await this.datadb;
    res.send(lend);
  }

  // Cria um empréstimo
  async create(req, res) {
    const { livroId, nomeAluno, devolvido } = req.body;
    const randomUUID = crypto.randomUUID();

    const lending = {
      id: randomUUID,
      livroId: livroId,
      nomeAluno: nomeAluno,
      dataEmprestimo: new Date(),
      devolvido: false,
    };

    await this.datadb.push(lending);

    return res.status(201).json(lending);
  }
}
