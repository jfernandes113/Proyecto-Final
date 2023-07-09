const router = require('express').Router();

// Import your controller modules here
const salariesController = require('../controllers/salariesController');
const rentsController = require('../controllers/rentsController');
const taxesController = require('../controllers/taxesController');
const expensesController = require('../controllers/expensesController');
const calculateController = require('../controllers/calculateController');

// Define your routes here
router.get('/salaries', salariesController.getSalaries);
router.get('/rents', rentsController.getRents);
router.get('/taxes', taxesController.getTaxes);
router.get('/expenses', expensesController.getExpenses);
router.post('/calculate', calculateController.calculate);

router.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

module.exports = router;
