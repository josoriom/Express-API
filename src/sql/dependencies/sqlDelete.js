const { sqlConnection } = require('../connection');

/**
 * SQL delete function
 * @param {string} table The name of the table in the SQL DB
 * @param {string} parameter The name of the column which the value should match in order to delete the entry.
 * @param {any} value The key value to delete from the table.
 */
async function sqlDelete(table, parameter, value) {
  const connection = await sqlConnection();
  connection.connect();
  const query = `
    DELETE FROM ${table} WHERE ${parameter} = ${value}
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

module.exports = { sqlDelete };
