const { createPool } = require('slonik');

const db = createPool(process.env.DB_URL);

module.exports = {
  db,
};


//postgres://user1:1234@localhost:5432/prueba