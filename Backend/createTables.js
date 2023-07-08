const fs = require('fs');
const path = require('path');
const { createPool } = require('slonik');
require('dotenv').config();

const db = createPool(process.env.DB_URL);

// Read the SQL script file
const sqlScriptPath = path.join(__dirname, 'sql', 'create_tables.sql');
const sqlScript = fs.readFileSync(sqlScriptPath, 'utf8');

// Execute the SQL script to create the tables
db.query(sqlScript)
  .then(() => {
    console.log('Tables created successfully.');
    process.exit(0); // Exit the process after creating tables
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
    process.exit(1); // Exit the process with an error code
  });
