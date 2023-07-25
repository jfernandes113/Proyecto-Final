const { connectionDb } = require('../db');

const getSalaries = async (req, res) => {
  try {  
    const client = await connectionDb();
    const salaries = await client.query('SELECT Jobs.title, Salaries.average_salary FROM Jobs INNER JOIN Salaries ON Jobs.id = Salaries.job_id;');
    res.json(salaries.rows);

    return res.status(200).json({
      success: true,
      salaries
    });
  } catch (error) {
    //return res.status(500).json({ error: 'An error occurred while retrieving salaries' });
  }
};

module.exports = {
  getSalaries,
};
