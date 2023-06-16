const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "Na-1fusinato",
    host: "127.0.0.1",
    port: 5432,
    database: "postgres"
})
    getteste()
async function getteste(){
    try{
        console.log("iniciando a conexão")
        await cliente.connect()
        console.log("conexão bem sucedida")
        const resultado = await cliente.query("select * from teste")
        console.table (resultado.rows)
    }
    catch (ex){
        console.log("ocorreu erro" + ex)
    }
    finally{
        await cliente.end()
        console.log("Cliente desconectado")
    }
}