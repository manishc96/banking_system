module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'bankAdmin',
      password: 'manish123',
      database: 'bank',
      multipleStatements: true,
      port: 3030

    },
    pool: { min: 0, max: 7 }

  }
}
