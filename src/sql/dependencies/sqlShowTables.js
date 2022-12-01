const { sqlConnection } = require('../connection');

/**
 * SQL function to show tables
 */
async function sqlShowTables() {
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

module.exports = { sqlShowTables };
