import axios from 'axios';

import { Server } from '../server.mjs';

const server = new Server();
test('Probar método GET', async () => {
  server.listen();

  // Perform query with GET method
  const result = await axios.get('http://localhost:8080/api/test/get_method', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Cerrar la conexión
  server.close();

  expect(result.data.ok).toBe(true);
  expect(result.data.msg).toBe('Successful test for method get');
});

test('Probar método DELETE', async () => {
  server.listen();

  //  Perform query with DELETE method
  const result = await axios.delete(
    'http://localhost:8080/api/test/delete_method',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  // Close connection
  server.close();

  expect(result.data.ok).toBe(true);
  expect(result.data.msg).toBe('Successful test for method delete');
});

test('Probar método POST', async () => {
  const string = 'texto de prueba';
  server.listen();

  // Perform query with POST method
  const result = await axios.post(
    'http://localhost:8080/api/test/post_method',
    {
      data: string,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  // Close connection
  server.close();

  expect(result.data.ok).toBe(true);
  expect(result.data.msg).toBe(`The response for post method is: ${string}`);
});

test('Probar método PUT', async () => {
  const string = 'texto de prueba';
  server.listen();

  // Perform query with PUT method
  const result = await axios.put(
    'http://localhost:8080/api/test/put_method',
    {
      data: string,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  // Close connection
  server.close();
  expect(result.data.ok).toBe(true);
  expect(result.data.msg).toBe(`The response for put method is: ${string}`);
});
