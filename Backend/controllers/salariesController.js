const { connectionDb } = require('../db');

const getSalaries = async (req, res) => {
  try {
    const salaries = await connectionDb().query('SELECT * FROM Salaries');
    res.json(salaries.rows);
  } catch (error) {
    console.error('Error retrieving salaries:', error);
    res.status(500).json({ error: 'An error occurred while retrieving salaries' });
  }
};

module.exports = {
  getSalaries,
};
