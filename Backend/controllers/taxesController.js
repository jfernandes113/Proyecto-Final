const { db } = require('../db');

const getTaxes = async (req, res) => {
  try {
    const taxes = await db.query('SELECT * FROM TaxBrackets');
    res.json(taxes.rows);
  } catch (error) {
    console.error('Error retrieving taxes:', error);
    res.status(500).json({ error: 'An error occurred while retrieving taxes' });
  }
};

module.exports = {
  getTaxes,
};
