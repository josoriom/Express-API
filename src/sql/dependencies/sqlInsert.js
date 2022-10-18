const sqlInsert = async (table, columns, values) => {
  if (columns.length !== values.length) {
    throw Error('Los valores insertados deben ser iguales a las columnas');
  } else {
    let valores = '(';
    for (let value of values) {
      valores += '%s, ';
    }
    valores += 'end of string';
    valores = valores.replace(', end of string', ')');
    query = `
        INSERT INTO ${table} (${columns})
        VALUES ${valores}
    `;
  }
};

module.exports = { sqlInsert };
