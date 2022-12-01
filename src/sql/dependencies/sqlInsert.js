const { sqlConnection } = require('../connection');

/**
 * SQL insert function
 * @param {string} table The name of the table in the SQL DB
 * @param {Array<Object>|Object} data Object or Array of objects with the data to insert
 */
async function sqlInsert(table, data) {
  const connection = await sqlConnection();
  connection.connect();
  const { columns, values } = getData(data);
  const query = `
    INSERT INTO ${table} (${columns}) VALUES ?
  `;
  connection.query(query, [values], (error, response) => {
    if (error) {
      console.log(`SQL Error --:>${error}`);
    } else {
      return response;
    }
  });
  connection.end();
}

function getData(entry) {
  if (Array.isArray(entry)) {
    const values = [];
    const columns = Object.keys(entry[0]);
    for (const obj of entry) {
      values.push(Object.values(obj));
    }
    return {
      columns,
      values,
    };
  } else {
    const values = [];
    const columns = [];
    const entries = Object.entries(entry);
    for (const item of entries) {
      columns.push(item[0]);
      values.push(item[1]);
    }
    return {
      columns,
      values: [values],
    };
  }
}

module.exports = { sqlInsert };
