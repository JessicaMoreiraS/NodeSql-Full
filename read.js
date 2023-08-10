const sql = require('msnodesqlv8'); //importar modulo

const conexao = "server=.;Database=cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"; //padrao para a conexao com o banco (criado localmente)
const consulta = "SELECT * FROM usuarios"; //comando SQL 


var global="oi";
//Informa o resultado
sql.query(conexao, consulta, (error, resultado) => {
    console.log("Valores da Tabela", resultado)
    global=resultado[0].nome;
});
/*
// server.js com http
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(global)
  //res.end('index.html')
  //res.end('Hello World! Welcome to Node.js');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


// server-express.js
const express = require('express')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
res.send(`<h1>${global}</h1>`)
})

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})