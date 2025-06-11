//src/config/database.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',  // Cambia según tu configuración
  user: process.env.DB_USER || 'root',       // Tu usuario de MySQL
  password: process.env.DB_PASSWORD || 'admin123',
  database: process.env.DB_NAME || 'colpryst_col3',
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = connection;