//importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operacoes no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizando o objeto de banco de dados para nossas operacoes

db.serialize(() => {
//    //criar tabela com comandos sql
//    db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//    `)
//    //inserir dados

// 
// const query = `
//    INSERT INTO places (
//        image,
//        name,
//        address,
//        address2,
//        state,
//        city,
//        items
//    ) VALUES (?,?,?,?,?,?,?);
// `
// 
// 
// const values = [
//     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Numero 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
//  ]

//  function afterInsertdata(err){
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)
//  }
 
//  db.run(query, values, afterInsertdata)

   //consultar dados
   // db.all(`SELECT * FROM PLACES`, function (err, rows){
   //     if (err) {
   //         return console.log(err)
   //     }

   //     console.log("Aqui estão seus registros")
   //     console.log(rows)
   // })

//    //deletar um dano na tabela
   
//    db.run(`DELETE FROM places WHERE id = ?`, [10], function afterInsertdata(err){
//         if (err) {
//             return console.log(err)
//         }

//          console.log("Registro deletado com sucesso")
//     })
   
})

