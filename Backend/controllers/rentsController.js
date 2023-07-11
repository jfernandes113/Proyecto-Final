const { db } = require('../db');

const getRents = async (req, res) => {
  try {
    const rents = await db.query('SELECT * FROM Rents');
    res.json(rents.rows);
  } catch (error) {
    console.error('Error retrieving rents:', error);
    res.status(500).json({ error: 'An error occurred while retrieving rents' });
  }
};

const createRent = async (req, res) => {
  try {
    // Retrieve data from the request body
    const { amount, date, propertyId } = req.body;

    // Perform necessary operations to create a new rent entry
    // ...

    // Return a success message or the created rent object
    res.status(201).json({ message: 'Rent created successfully' });
  } catch (error) {
    console.error('Error creating rent:', error);
    res.status(500).json({ error: 'An error occurred while creating the rent' });
  }
};

module.exports = {
  getRents,
  createRent,
};
