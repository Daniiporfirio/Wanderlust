// Desevolver um blog a tema livre.
// Deverá ser implementado a interface de aplicação, usando o EJS. Deverá ser implementado o banco de dados usando o SQLITE3
// Ações: adicionar um novo post, editar/excluir um post e visualizar todos a lista de todos os posts.

const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importando os caminhos que serão utilizados pelo modulo EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// importando as rotinas que estão no arquivo app.routes.js
const routes = require("./app.routes");
routes(app);

// Disponibilizando o servidor e colocando-o em modo escuta
app.listen(port, () => {
    console.log(`Server running is  ${port}`);
});