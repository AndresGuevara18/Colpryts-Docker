//src/config/database.js
//src/config/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',  // Cambia según tu configuración
  user: process.env.DB_USER || 'root',       // Tu usuario de MySQL
  password: process.env.DB_PASSWORD || 'admin123',
  database: process.env.DB_NAME || 'colpryst_col3',
  charset: 'utf8mb4', // Añadir charset para soportar UTF-8
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Probar la conexión del pool (opcional, pero bueno para depuración inicial)
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al obtener conexión del pool de MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL a través del pool');
  connection.release(); // Devolver la conexión al pool
});

module.exports = pool;