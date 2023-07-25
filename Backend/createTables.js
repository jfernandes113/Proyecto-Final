const fs = require('fs');
require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DB_URL,
});

const Jobs = [
  {job: 'Desarrollador de Software', idLocation: 1, avgSalary: 30.00},
  {job: 'Analista de Datos', idLocation: 2, avgSalary: 31.00},
  {job: 'Ingeniero de Sistemas', idLocation: 1, avgSalary: 28.00},
  {job: 'Diseñador Gráfico', idLocation: 3, avgSalary: 32.00},
  {job: 'Contador', idLocation: 1, avgSalary: 28.00},
  {job: 'Enfermera', idLocation: 2, avgSalary: 28.00},
  {job: 'Abogado', idLocation: 1, avgSalary: 28.00},
  {job: 'Gerente de Proyectos', idLocation: 1, avgSalary: 34.00},
  {job: 'Asistente Administrativo', idLocation: 1, avgSalary: 28.00},
  {job: 'Marketing Digital', idLocation: 1, avgSalary: 32.00},
  {job: 'Economista', idLocation: 3, avgSalary: 38.00},
  {job: 'Chef', idLocation: 3, avgSalary: 25.00},
  {job: 'Profesor', idLocation: 2, avgSalary: 29.00},
  {job: 'Investigador', idLocation: 3, avgSalary: 22.00},
  {job: 'Ingeniero Civil', idLocation: 1, avgSalary: 23.00},
  {job: 'Periodista', idLocation: 2, avgSalary: 27.00},
  {job: 'Arquitecto', idLocation: 3, avgSalary: 28.00},
  {job: 'Psicólogo', idLocation: 1, avgSalary: 28.00},
  {job: 'Asesor Financiero', idLocation: 3, avgSalary: 28.00},
  {job: 'Traductor', idLocation: 1, avgSalary: 28.00},
  {job: 'Recursos Humanos', idLocation: 1, avgSalary: 28.00},
  {job: 'Técnico de Soporte', idLocation: 2, avgSalary: 28.00},
  {job: 'Administrador de Redes', idLocation: 1, avgSalary: 28.00},
  {job: 'Diseñador Web', idLocation: 3, avgSalary: 28.00},
  {job: 'Agente de Ventas', idLocation: 2, avgSalary: 28.00},
  {job: 'Analista Financiero', idLocation: 2, avgSalary: 48.00},
  {job: 'Ingeniero Mecánico', idLocation: 1, avgSalary: 43.00},
  {job: 'Secretario/a Ejecutivo/a', idLocation: 1, avgSalary: 28.00},
  {job: 'Consultor de Negocios', idLocation: 1, avgSalary: 36.00},
  {job: 'Ingeniero Eléctrico', idLocation: 2, avgSalary: 20.00 }
];

const insertIntoLocations = async (locationName) => {
  const checkQuery = 'SELECT COUNT(*) FROM Locations WHERE name = $1';
  const checkValues = [locationName];
  const { rows } = await client.query(checkQuery, checkValues);

  const count = parseInt(rows[0].count);
  if (count === 0) {
    const insertQuery = 'INSERT INTO Locations (name) VALUES ($1) RETURNING id';
    const values = [locationName];
    const { rows } = await client.query(insertQuery, values);

    console.log('Inserción de salario realizada con éxito');
    return rows[0].id
  } else {
    const selectQuery = 'SELECT id FROM Locations WHERE name = $1';
    const values = [locationName];
    const { rows } = await client.query(selectQuery, values);

    return rows[0].id
  }

}

const insertIntoNeighborhoods = async (locationId, name, rent) => {
  const checkQuery = 'SELECT COUNT(*) FROM Neighborhoods WHERE location_id = $1 AND name = $2';
  const checkValues = [locationId, name];
  const { rows } = await client.query(checkQuery, checkValues);

  const count = parseInt(rows[0].count);
  if (count === 0) {
    const insertQuery = 'INSERT INTO Neighborhoods (location_id, name, rent_price) VALUES ($1, $2, $3)';
    const values = [locationId, name, rent];
    await client.query(insertQuery, values);

    console.log('Inserción de salario realizada con éxito');
  }
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
  }
}

const insertIntoJobs = async (job) => {
  const checkQuery = 'SELECT COUNT(*) FROM Jobs WHERE title = $1';
  const checkValues = [job];
  const { rows } = await client.query(checkQuery, checkValues);

  const count = parseInt(rows[0].count);
  if (count === 0) {
    const insertQuery = 'INSERT INTO Jobs (title) VALUES ($1) RETURNING id';
    const values = [job]; // Valores para las columnas en la inserción
    const { rows } = await client.query(insertQuery, values);

    return rows[0].id
  } else {
    const selectQuery = 'SELECT id FROM Jobs WHERE title = $1';
    const values = [job];
    const { rows } = await client.query(selectQuery, values);

    return rows[0].id;
  }
}

const runQuery = async () => {
  try {
    await client.connect(); // Conectarse al servidor de la base de datos
    const sql = fs.readFileSync('./sql/create_tables.sql', 'utf8');
    await client.query(sql);

    const sevillaId = await insertIntoLocations('sevilla');
    await insertIntoNeighborhoods(sevillaId, 'Sevilla', 1200);
    const bilbaoId = await insertIntoLocations('bilbao');
    await insertIntoNeighborhoods(bilbaoId, 'Bilbao', 1500);
    const madridId = await insertIntoLocations('madrid');
    await insertIntoNeighborhoods(madridId, 'Madrid', 1700);

    for (const job of Jobs) {
      const jobId = await insertIntoJobs(job.job);
      await insertIntoSalaries(jobId, job.idLocation, job.avgSalary);
    }

    await client.end(); // Cerrar la conexión cuando hayas terminado
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  }
};

runQuery();
