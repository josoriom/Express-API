import { sqlConnection } from '../connection.mjs';

/**
 * SQL update function
 * @param {string} table The name of the table in the SQL DB.
 * @param {Object} where Object where column is the name of the column to search, and value is the identifier to match in order to update the entry.
 * @param {Object} data Object with the new data.
 */
export async function sqlUpdate(table, where, data) {
  const connection = await sqlConnection();
  connection.connect();
  const { column, value } = where;
  const keys = Object.keys(data);
  const values = Object.values(data);
  const entries = [];
  for (let i = 0; i < keys.length; i++) {
    entries.push([`${keys[i]} = '${values[i]}'`]);
  }
  const setup = entries.join(',');
  const query = `
    UPDATE ${table} SET ${setup} WHERE ${column}='${value}'
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
