import express, { request } from "express";
import { bookRouter } from "./routers/book.routes.js";
import { loanRouter } from "./routers/emprestimos.routes.js";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(bookRouter);
app.use(loanRouter);

app.get("/", (req, res) => {
  res.send("Mundão World!");
});

app.listen(PORT, () => {
  console.log(`Port open at ${PORT}`);
});
