const { sqlConnection } = require('../files/settings');
const { sqlSearch } = require('../files/dependencies/sqlSearch');
describe('SQL', () => {
  it('Conectar a la base de datos', async () => {
    const connection = await sqlConnection();
    connection.connect();
    expect(connection.state).toStrictEqual('disconnected');
    connection.end();
  });

  it('llamar elementos', async () => {
    const table = await sqlSearch('investors');
    const row = await sqlSearch('investors', { valor: 17 });
    const bycolumns = await sqlSearch('investors', {
      columns: ['name', 'lastname'],
    });
    const byColumnsAndId = await sqlSearch('investors', {
      valor: 17,
      columns: ['name', 'lastname'],
    });
    console.log({ row, length: table.length, bycolumns, byColumnsAndId });
    expect(table.length).toStrictEqual(10);
  });
});
