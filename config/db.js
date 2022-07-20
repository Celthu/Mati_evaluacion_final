const mysql = require('mysql2');
//Se crea la conexión a la base de datos.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cft',
});
module.exports = connection