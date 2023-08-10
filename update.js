const sql = require('msnodesqlv8'); //importar modulo

const conexao = "server=.;Database=cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"; //padrao para a conexao com o banco (criado localmente)
const atualizar = "UPDATE usuarios SET nome = 'Jessica' WHERE id=11"; //comando SQL 

//Informa o resultado
sql.query(conexao, atualizar, (error, resultado) => {
    console.log("Tabela atualizada com sucesso", resultado)
});