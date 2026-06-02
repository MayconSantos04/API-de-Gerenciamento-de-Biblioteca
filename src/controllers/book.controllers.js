import crypto from "node:crypto";
export class BookController {
  datadb = [];

  async list(req, res) {
    const books = await this.datadb;
    res.send(books);
  }

  async listId(req, res) {
    const resultId = this.datadb.find((datadbs) => {
      return datadbs.id === req.params.id;
    });

    res.send(resultId);
  }

  async create(req, res) {
    const { titulo, autor, genero, disponivel } = req.body;
    const randomUUID = crypto.randomUUID();

    const book = {
      id: randomUUID,
      titulo: titulo,
      autor: autor,
      genero: genero,
      disponivel: disponivel,
    };

    await this.datadb.push(book);

    console.log(this.datadb);
    return res.status(201).json(book);
  }
}
