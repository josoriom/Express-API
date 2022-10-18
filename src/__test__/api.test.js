const axios = require('axios');

const { ExpressAPI } = require('../api');

describe('Express API', () => {
  const api = new ExpressAPI();
  it('Probar método GET', async () => {
    // Inicializar la API
    api.listen();

    // Realizar la petición con método GET
    const result = await axios.get(
      'http://localhost:8080/api/test/get_method',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // Cerrar la conexión
    api.close();

    expect(result.data.ok).toBe(true);
    expect(result.data.msg).toBe('Successful test for method get');
  });

  it('Probar método DELETE', async () => {
    // Inicializar la API
    api.listen();

    // Realizar la petición con método DELETE
    const result = await axios.delete(
      'http://localhost:8080/api/test/delete_method',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // Cerrar la conexión
    api.close();

    expect(result.data.ok).toBe(true);
    expect(result.data.msg).toBe('Successful test for method delete');
  });

  it('Probar método POST', async () => {
    // Inicializar la API
    const string = 'texto de prueba';
    api.listen();

    // Realizar la petición con método POST
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

    // Cerrar la conexión
    api.close();

    expect(result.data.ok).toBe(true);
    expect(result.data.msg).toBe(`The response for post method is: ${string}`);
  });

  it('Probar método PUT', async () => {
    // Inicializar la API
    const string = 'texto de prueba';
    api.listen();

    // Realizar la petición con método PUT
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

    // Cerrar la conexión
    api.close();
    expect(result.data.ok).toBe(true);
    expect(result.data.msg).toBe(`The response for put method is: ${string}`);
  });
});
