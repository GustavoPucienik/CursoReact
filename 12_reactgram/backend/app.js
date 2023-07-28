require("dotenv").config()

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

//config JSON and form data responses
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// upar diretorio
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// conexão banco de dados
require("./config/db");

// teste rota
app.get("/", (req, res) => {
   res.send("API Working!");
 });

// rotas
const router = require("./routes/Router");

app.use(router)

app.listen(port, () => {
   console.log(`App rodando na porta ${port}`);
})