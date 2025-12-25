const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sg23@#AM',
  database: 'student_mgmt',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
