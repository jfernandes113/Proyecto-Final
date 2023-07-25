

const router = require('express').Router()

// Import your controller modules here
const salariesController = require('../controllers/salariesController');
const rentsController = require('../controllers/rentsController');

// Define your routes here
router.get('/salaries', salariesController.getSalaries);
router.get('/rents', rentsController.getRents);

router.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

module.exports = router;
