import crypto from "node:crypto";
import { database } from "../datadb.js";
export class BookController {
  // Lista todos os livros
  async list(req, res) {
    const books = await database.books;
    res.send(books);
  }

  // Lista livros específicos
  async listId(req, res) {
    const resultId = database.books.find((datadbs) => {
      return datadbs.id === req.params.id;
    });

    if (resultId === undefined) {
      return res.status(404).json({ message: "Não encontrado. " });
    }

    res.send(resultId);
  }

  // Cria livros
  async create(req, res) {
    const { titulo, autor, genero } = req.body;
    const randomUUID = crypto.randomUUID();

    if (
      !titulo ||
      titulo.trim() === "" ||
      !autor ||
      autor.trim() === "" ||
      !genero ||
      genero.trim() === ""
    ) {
      return res
        .status(400)
        .json({ message: "Error ao criar livro. (dados incompletos)." });
    }

    const book = {
      id: randomUUID,
      titulo: titulo.trim(),
      autor: autor.trim(),
      genero: genero.trim(),
      disponivel: true,
    };

    await database.books.push(book);

    return res.status(201).json(book);
  }

  // Edita livros
  async update(req, res) {
    const resultId = database.books.findIndex((datadbs) => {
      return datadbs.id === req.params.id;
    });

    if (resultId === -1) {
      return res.status(404).json({ message: "Não encontrado. " });
    }

    let book = database.books[resultId];

    const updatedBook = {
      id: book.id,
      ...req.body,
    };

    database.books[resultId] = updatedBook;

    return res.send(database.books);
  }

  //  Deleta livro
  async remove(req, res) {
    const resultId = database.books.findIndex((datadbs) => {
      return datadbs.id === req.params.id;
    });

    if (resultId === -1) {
      return res.status(400).json({ message: "Não encontrado. " });
    }

    database.books.splice(resultId, 1);

    return res.status(204).send(database.books);
  }
}
