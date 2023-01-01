import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();


export async function sqlConnection() {
  const dbConfig = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DB,
  };

  return mysql.createConnection(dbConfig);
}
