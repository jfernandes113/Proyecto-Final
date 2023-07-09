const { db } = require('../db');

const getRents = async (req, res) => {
  try {
    const rents = await db.query('SELECT * FROM Neighborhoods');
    res.json(rents.rows);
  } catch (error) {
    console.error('Error retrieving rents:', error);
    res.status(500).json({ error: 'An error occurred while retrieving rents' });
  }
};

module.exports = {
  getRents,
};
