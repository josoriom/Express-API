import { sqlConnection } from '../connection.mjs';
import { toJSON } from './toJSON.mjs';

export const runQuery = async (query, values) => {
  const connection = await sqlConnection();
  connection.connect();
  return new Promise(function (resolve, reject) {
    connection.query(query, (error, response) => resolve(toJSON(response)));
    connection.end();
  });
};
