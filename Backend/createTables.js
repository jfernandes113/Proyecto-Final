/*const fs = require('fs');
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
    const checkQuery = 'SELECT * FROM Salaries';
    const { rows } = await client.query(checkQuery);
    console.log("rows", rows);

    await client.end(); // Cerrar la conexión cuando hayas terminado
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  }
};

runQuery();

const insertIntoJobs = async () => {
  const checkQuery = 'SELECT COUNT(*) FROM Salaries';
  const { rows } = await client.query(checkQuery);

  const count = parseInt(rows[0].count);
  if (count === 0) {
    const insertQuery = 'INSERT INTO Salaries (job_id, location_id, average_salary) VALUES ($1, $2, $3)';
    const values = [1, 1, 32]; // Valores para las columnas en la inserción
    await client.query(insertQuery, values);

    console.log('Inserción realizada con éxito');
  } else {
    console.log('Los datos ya existen, no se realiza la inserción');
  }
}*/

const fs = require('fs');
require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DB_URL,
});

const insertIntoJobs = async (jobTitle) => {
  const insertQuery = 'INSERT INTO Jobs (title) VALUES ($1) RETURNING id';
  const values = [jobTitle];
  const res = await client.query(insertQuery, values);
  console.log('Inserción de trabajo realizada con éxito');
  return res.rows[0].id; // devuelve el id de la fila insertada
}

const insertIntoLocations = async (locationName) => {
  const insertQuery = 'INSERT INTO Locations (name) VALUES ($1) RETURNING id';
  const values = [locationName];
  const res = await client.query(insertQuery, values);
  console.log('Inserción de ubicación realizada con éxito');
  return res.rows[0].id; // devuelve el id de la fila insertada
}

const insertIntoSalaries = async (jobId, locationId, avgSalary) => {
  const checkQuery = 'SELECT COUNT(*) FROM Salaries WHERE job_id = $1 AND location_id = $2';
  const checkValues = [jobId, locationId];
  const { rows } = await client.query(checkQuery, checkValues);

  const count = parseInt(rows[0].count);
  if (count === 0) {
    const insertQuery = 'INSERT INTO Salaries (job_id, location_id, average_salary) VALUES ($1, $2, $3)';
    const values = [jobId, locationId, avgSalary]; // Valores para las columnas en la inserción
    await client.query(insertQuery, values);

    console.log('Inserción de salario realizada con éxito');
  } else {
    console.log('Los datos ya existen, no se realiza la inserción');
  }
}

const runQuery = async () => {
  try {
    await client.connect(); // Conectarse al servidor de la base de datos
    const sql = fs.readFileSync('./sql/create_tables.sql', 'utf8');
    await client.query(sql);

    const jobIdEnfermero = await insertIntoJobs('enfermero');
    const jobIdBartender = await insertIntoJobs('bartender');
    const jobIdBombera = await insertIntoJobs('bombera');

    const locationIdSevilla = await insertIntoLocations('sevilla');
    const locationIdBilbao = await insertIntoLocations('bilbao');
    const locationIdMadrid = await insertIntoLocations('madrid');

    await insertIntoSalaries(jobIdEnfermero, locationIdSevilla, 32);
    await insertIntoSalaries(jobIdBartender, locationIdBilbao, 28);
    await insertIntoSalaries(jobIdBombera, locationIdMadrid, 35);

    //prueba de select a borrar
    const checkQuery = 'SELECT * FROM Salaries';
    const { rows } = await client.query(checkQuery);
    console.log("rows", rows);

    await client.end(); // Cerrar la conexión cuando hayas terminado
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  }
};

runQuery();


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
