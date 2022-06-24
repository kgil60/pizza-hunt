const router = require('express').Router();
const { getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza } = require('../../controllers/pizza-controller');

// get all and post routes
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// get one put and delete routes
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;