const { Client } = require('pg');

async function connectionDb() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  
  await client.connect(); // Conectarse al servidor de la base de datos
  const sql = fs.readFileSync('./sql/create_tables.sql', 'utf8');
  await client.query(sql);

  return client;
}

module.exports = {
  connectionDb
};
