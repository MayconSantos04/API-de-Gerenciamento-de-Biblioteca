import crypto from "node:crypto";
import { database } from "../datadb.js";

export class LoanController {
  // Lista todos os empréstimos
  async list(req, res) {
    const loansWithBook = database.loans.map((loan) => {
      const book = database.books.find((b) => b.id === loan.livroId);

      return {
        id: loan.id,
        livroId: loan.livroId,
        nomeAluno: loan.nomeAluno,
        dataEmprestimo: loan.dataEmprestimo,
        devolvido: loan.devolvido,
        livroTitulo: book ? book.titulo : "Livro não encontrado",
      };
    });

    return res.json(loansWithBook);
  }

  // Cria um empréstimo
  async create(req, res) {
    const { livroId, nomeAluno } = req.body;
    const randomUUID = crypto.randomUUID();

    if (
      !livroId ||
      livroId.trim() === "" ||
      !nomeAluno ||
      nomeAluno.trim() === ""
    ) {
      return res.status(400).json({
        message: "Error. Não foi possível concluir. Dados incompletos.",
      });
    }

    const book = database.books.find((book) => {
      return book.id === livroId;
    });

    if (book === undefined) {
      return res.status(404).json({ message: "Livro não encontrado." });
    }

    if (book.disponivel === false) {
      return res.status(400).json({ message: "Livro não está disponível." });
    }

    const lending = {
      id: randomUUID,
      livroId: livroId,
      nomeAluno: nomeAluno,
      dataEmprestimo: new Date(),
      devolvido: false,
    };

    book.disponivel = false;

    await database.loans.push(lending);

    return res.status(201).json(lending);
  }

  // Atualiza status de devolvido

  async updateDevolution(req, res) {
    const { id } = req.params;

    const loanIndex = database.loans.findIndex((loan) => loan.id === id);

    const loanBook = database.loans.find((loan) => {
      return loan.id === id;
    });

    if (!loanBook) {
      return res.status(404).json({ message: "Expréstimo não encontrado. " });
    }

    const book = database.books.find((book) => {
      return book.id === loanBook.livroId;
    });

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado." });
    }

    loanBook.devolvido = true;
    book.disponivel = true;
    database.loans.splice(loanIndex, 1);

    return res.status(200).json(loanBook);
  }
}
