import { sqlConnection } from '../connection.mjs';

/**
 * SQL delete function
 * @param {string} table The name of the table in the SQL DB
 * @param {Object} data Object where the key is the name of the column, and the value is the value to match in order to delete the entry.
 */
export async function sqlDelete(table, data) {
  const connection = await sqlConnection();
  connection.connect();
  const column = Object.keys(data)[0];
  const value = Object.values(data)[0];
  const query = `
    DELETE FROM ${table} WHERE ${column} = '${value}'
  `;
  connection.query(query, (error, response) => {
    if (error) {
      console.log(`SQL Error --:>${error}`);
    } else {
      return response;
    }
  });
  connection.end();
}
