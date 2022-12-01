const { sqlConnection } = require('../connection');

/**
 * SQL insert function
 * @param {string} table The name of the table in the SQL DB
 * @param {Array<string>} columns The columns which the values will be insert it.
 * @param {Array<Array<any>>|Array<any>} values The array with the values to insert in the DB
 */
async function sqlInsert(table, columns, values) {
  if (columns.length !== values.length) {
    throw Error('Los valores insertados deben ser iguales a las columnas');
  } else {
    const connection = await sqlConnection();
    connection.connect();
    const query = `
      INSERT INTO ${table} (${columns}) VALUES ?
    `;
    values = checkValues(values);
    connection.query(query, [values], (error, response) => {
      if (error) {
        console.log(`SQL Error --:>${error}`);
      } else {
        return response;
      }
    });
    connection.end();
  }
}

function checkValues(array) {
  if (Array.isArray(array[0])) {
    return array;
  } else {
    return [array];
  }
}

module.exports = { sqlInsert };
