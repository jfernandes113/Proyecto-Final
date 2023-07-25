const { connectionDb } = require('../db');

const getRents = async (req, res) => {
  try {  
    const client = await connectionDb();
    const rents = await client.query('SELECT Locations.name, Neighborhoods.rent_price FROM Locations INNER JOIN Neighborhoods ON Locations.id = Neighborhoods.location_id;');
    res.json(rents.rows);

    return res.status(200).json({
      success: true,
      rents
    });
  } catch (error) {
    //return res.status(500).json({ error: 'An error occurred while retrieving salaries' });
  }
};

module.exports = {
  getRents,
};
