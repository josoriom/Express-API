const { sqlConnection } = require('../settings');
const { toJSON } = require('./toJSON');

const runQuery = async (sql) => {
  const connection = await sqlConnection();
  connection.connect();
  return new Promise(function (resolve, reject) {
    connection.query(sql, (e, rows, f) => resolve(toJSON(rows)));
    connection.end();
  });
};

module.exports = { runQuery };
