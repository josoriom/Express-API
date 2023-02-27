import { sqlConnection } from '../connection.mjs';

/**
 * SQL function to show tables
 */
export async function sqlShowTables() {
  const connection = await sqlConnection();
  connection.connect();
  connection.query('SHOW tables', function (error, response) {
    if (error) {
      throw error;
    } else {
      return response;
    }
  });
  connection.end();
}
