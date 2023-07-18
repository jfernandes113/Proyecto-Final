const fs = require('fs');
require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DB_URL,
});

const runQuery = async () => {
  try {
    await client.connect(); // Conectarse al servidor de la base de datos
    const sql = fs.readFileSync('./sql/create_tables.sql', 'utf8');
    await client.query(sql);

    await insertIntoJobs();

    //prueba de select a borrar
    const checkQuery = 'SELECT * FROM Jobs';
    const { rows } = await client.query(checkQuery);
    console.log("rows", rows);

    await client.end(); // Cerrar la conexión cuando hayas terminado
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  }
};

runQuery();

const insertIntoJobs = async () => {
  const checkQuery = 'SELECT COUNT(*) FROM Jobs';
  const { rows } = await client.query(checkQuery);

  const count = parseInt(rows[0].count);
  if (count === 0) {
    const insertQuery = 'INSERT INTO Jobs (title) VALUES ($1)';
    const values = ['informatico']; // Valores para las columnas en la inserción
    await client.query(insertQuery, values);

    console.log('Inserción realizada con éxito');
  } else {
    console.log('Los datos ya existen, no se realiza la inserción');
  }
}
