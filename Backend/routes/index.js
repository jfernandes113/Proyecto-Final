/*const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes())

    return router
}*/

const router = require('express').Router()

// Import your controller modules here
const salariesController = require('../controllers/salariesController');
//const rentsController = require('../controllers/rentsController');
//const calculateController = require('../controllers/calculateController');

// Define your routes here
router.get('/salaries', salariesController.getSalaries);
//router.get('/rents', rentsController.getRents);
//router.post('/calculate', calculateController.calculate);

router.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

module.exports = router;
