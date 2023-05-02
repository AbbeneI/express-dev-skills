const express = require('express');
const router = express.Router();

const dogsController = require('../controllers/dogs');

router.get('/', dogsController.index);

router.get('/:name', dogsController.show)

module.exports = router;