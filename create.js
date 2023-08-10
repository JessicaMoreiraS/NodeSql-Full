const sql = require('msnodesqlv8'); //importar modulo

const conexao = "server=.;Database=cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"; //padrao para a conexao com o banco (criado localmente)
const create = "INSERT INTO usuarios VALUES (11, 'Jessica', 'jessica@gmail.com', '12345678922')"; //comando SQL 

//Informa o resultado
sql.query(conexao, create, (error, resultado) => {
    console.log("Valores Inseridos com sucesso", resultado)
});