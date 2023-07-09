const { db } = require('../db');

const getExpenses = async (req, res) => {
  try {
    const expenses = await db.query('SELECT * FROM Expenses');
    res.json(expenses.rows);
  } catch (error) {
    console.error('Error retrieving expenses:', error);
    res.status(500).json({ error: 'An error occurred while retrieving expenses' });
  }
};

module.exports = {
  getExpenses,
};
