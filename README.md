# API de Gerenciamento de Biblioteca

> Projeto acadêmico desenvolvido durante o curso de Full Stack.

---

## Sobre o Projeto

Este projeto foi desenvolvido a pedido da minha mentora durante o curso de Full Stack, com o objetivo de praticar conceitos fundamentais de desenvolvimento backend.

A proposta da atividade era construir uma API capaz de gerenciar livros e empréstimos de uma biblioteca, aplicando conceitos de CRUD, organização de rotas, controllers e regras de negócio.

Além da implementação da API, este projeto também marcou meu primeiro contato com o Swagger, utilizado para documentar os endpoints de forma mais organizada e facilitar os testes da aplicação.

---

## Minha Contribuição

Todo o projeto foi desenvolvido por mim, desde a estrutura da aplicação até as regras de negócio.

### Funcionalidades implementadas

- Cadastro de livros
- Listagem de livros
- Busca de livros por ID
- Atualização de livros
- Remoção de livros
- Registro de empréstimos
- Controle de disponibilidade dos livros
- Registro de devoluções
- Documentação completa com Swagger

---

## Endpoints Desenvolvidos

### Livros

#### Listar Livros

```http
GET /books
```

#### Buscar Livro por ID

```http
GET /books/:id
```

#### Cadastrar Livro

```http
POST /books
```

#### Atualizar Livro

```http
PUT /books/:id
```

#### Remover Livro

```http
DELETE /books/:id
```

### Empréstimos

#### Listar Empréstimos

```http
GET /loan
```

#### Registrar Empréstimo

```http
POST /loan
```

#### Registrar Devolução

```http
PATCH /loan/:id/devolution
```

---

## Regras Implementadas

Durante o desenvolvimento foram adicionadas algumas validações para garantir a integridade dos dados:

- Não permite cadastro de livros com campos vazios.
- Gera identificadores únicos para livros e empréstimos.
- Verifica a existência do livro antes de realizar operações.
- Não permite empréstimo de livros inexistentes.
- Não permite empréstimo de livros indisponíveis.
- Atualiza automaticamente a disponibilidade do livro após um empréstimo.
- Libera novamente o livro após a devolução.
- Valida informações obrigatórias para criação de empréstimos.

---

## Estrutura de Dados

Como requisito da atividade, não foi utilizado banco de dados externo.

Os dados são armazenados temporariamente em memória utilizando arrays, simulando um banco de dados simples para fins de aprendizado.

```javascript
const database = {
  books: [],
  loans: [],
};
```

---

## Documentação com Swagger

A aplicação possui documentação integrada utilizando Swagger, permitindo visualizar e testar todos os endpoints através da interface web.

Após iniciar o projeto, acesse:

```bash
http://localhost:3333/api-docs
```

---

## Tecnologias Utilizadas

<div align="left">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />

</div>

---

## Execução Local

Clone o repositório:

```bash
git clone https://github.com/MayconSantos04/API-de-Gerenciamento-de-Biblioteca.git
```

Acesse a pasta do projeto:

```bash
cd API-de-Gerenciamento-de-Biblioteca
```

Abra o projeto no VS Code:

```bash
code .
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## Observação

Este projeto foi desenvolvido para fins acadêmicos e teve como principal objetivo reforçar conceitos de desenvolvimento backend, criação de APIs REST, documentação de endpoints e aplicação de regras de negócio.

Caso tenha interesse, fique à vontade para clonar o projeto, testar as funcionalidades e analisar a estrutura utilizada durante o desenvolvimento.
