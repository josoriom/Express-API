const mysql = require('mysql');
require('dotenv').config();

async function sqlConnection() {
  const dbConfig = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DB,
  };

  return mysql.createConnection(dbConfig);
}

module.exports = { sqlConnection };
