import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API-DE-GERENCIAMENTO-DE-BIBLIOTECA",
      version: "1.0.0",
      description:
        "Trata-se de uma api para criação/cadastro de livros e empréstimos de uma biblioteca.",
    },
    servers: [
      {
        url: "http://localhost:3333",
      },
    ],
  },

  apis: [
    "./src/routers/book.routes.js",
    "./src/routers/emprestimos.routes.js",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;