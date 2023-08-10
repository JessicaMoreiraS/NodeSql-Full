const sql = require('msnodesqlv8'); //importar modulo

const conexao = "server=.;Database=cadastro;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"; //padrao para a conexao com o banco (criado localmente)
const consulta = "DELETE FROM usuarios WHERE id=11"; //comando SQL 

//Informa o resultado
sql.query(conexao, consulta, (error, resultado) => {
    console.log("Valor deletado da Tabela", resultado)
});