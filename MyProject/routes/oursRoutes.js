var express = require('express');
var router = express.Router();
var oursController = require('../controllers/oursController.js');

/*
 * GET
 */
router.get('/', oursController.list);

/*
 * GET
 */
router.get('/:id', oursController.show);

/*
 * POST
 */
router.post('/', oursController.create);

/*
 * PUT
 */
router.put('/:id', oursController.update);

/*
 * DELETE
 */
router.delete('/:id', oursController.remove);

module.exports = router;
