const { Client } = require('pg');

const client = new Client({
  user: 'michinacandy',
  host: 'localhost',
  database: 'Mapa',
  password: '1234',
  port: 5432, 
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');



  client.query('SELECT * FROM Jobs', (err, res) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('Query result:', res.rows);
    }

    // Close the connection
    client.end();
  });
});

const { Pool } = require('pg');

const pool = new Pool({
  user: 'michinacandy',
  host: 'localhost',
  database: 'Mapa',
  password: '1234',
  port: 5432, // default PostgreSQL port
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  client.query('BEGIN', (err) => {
    if (err) {
      console.error('Error starting a transaction:', err);
      done(err);
      return;
    }

    const createTables = `
      CREATE TABLE IF NOT EXISTS Jobs (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Salaries (
        id SERIAL PRIMARY KEY,
        job_id INTEGER REFERENCES Jobs(id),
        location_id INTEGER REFERENCES Locations(id),
        average_salary NUMERIC(10, 2) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Neighborhoods (
        id SERIAL PRIMARY KEY,
        location_id INTEGER REFERENCES Locations(id),
        name TEXT NOT NULL,
        rent_price NUMERIC(10, 2) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS TaxBrackets (
        id SERIAL PRIMARY KEY,
        location_id INTEGER REFERENCES Locations(id),
        income_range TEXT NOT NULL,
        tax_rate NUMERIC(4, 2) NOT NULL
      );
    `;

    client.query(createTables, (err) => {
      if (err) {
        console.error('Error creating tables:', err);
        client.query('ROLLBACK', (rollbackErr) => {
          if (rollbackErr) {
            console.error('Error rolling back the transaction:', rollbackErr);
          }
          done(err);
        });
      } else {
        client.query('COMMIT', (commitErr) => {
          if (commitErr) {
            console.error('Error committing the transaction:', commitErr);
          }
          done();
        });
      }
    });
  });
});
