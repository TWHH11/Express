var express = require('express');
var router = express.Router();
var todo = require('./../controller/TodoController');

router.get('/',todo.getonetodo)

module.exports = router;