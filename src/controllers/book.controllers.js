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
      return res.status(400).json({ message: "Não encontrado. " });
    }

    res.send(resultId);
  }

  // Cria livros
  async create(req, res) {
    const { titulo, autor, genero, disponivel } = req.body;
    const randomUUID = crypto.randomUUID();

    const book = {
      id: randomUUID,
      titulo: titulo,
      autor: autor,
      genero: genero,
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
      return res.status(400).json({ message: "Não encontrado. " });
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

    return res.status(200).send(database.books);
  }
}
