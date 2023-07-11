const router = require('express').Router();
const { authorizer, fieldsValidator } = require('../middlewares');
const rentsController = require('../controllers/rentsController');

// Define your routes here
router.get('/', rentsController.getRents);
router.post('/', authorizer(), fieldsValidator('rentData'), rentsController.createRent);
router.put('/:id', authorizer(), fieldsValidator('rentData'), rentsController.updateRent);
router.delete('/:id', authorizer(), rentsController.deleteRent);

module.exports = router;
