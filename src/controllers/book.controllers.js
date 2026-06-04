import crypto from "node:crypto";
export class BookController {
  datadb = [];

  // Lista todos os livros
  async list(req, res) {
    const books = await this.datadb;
    res.send(books);
  }

  // Lista livros específicos
  async listId(req, res) {
    const resultId = this.datadb.find((datadbs) => {
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

    await this.datadb.push(book);

    return res.status(201).json(book);
  }

  // Edita livros
  async update(req, res) {
    const resultId = this.datadb.findIndex((datadbs) => {
      return datadbs.id === req.params.id;
    });

    if (resultId === -1) {
      return res.status(400).json({ message: "Não encontrado. " });
    }

    let book = this.datadb[resultId];

    const updatedBook = {
      id: book.id,
      ...req.body,
    };

    this.datadb[resultId] = updatedBook;

    return res.send(this.datadb);
  }

  //  Deleta livro
  async remove(req, res) {
    const resultId = this.datadb.findIndex((datadbs) => {
      return datadbs.id === req.params.id;
    });

    if (resultId === -1) {
      return res.status(400).json({ message: "Não encontrado. " });
    }

    this.datadb.splice(resultId, 1);

    return res.status(200).send(this.datadb);
  }
}
