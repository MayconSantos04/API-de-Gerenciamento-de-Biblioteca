import express from "express";
import { bookRouter } from "./routers/book.routes.js";
import { loanRouter } from "./routers/emprestimos.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swagger.js";
import cors from "cors";


const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());
app.use(bookRouter);
app.use(loanRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Port open im ${PORT}`);
});
