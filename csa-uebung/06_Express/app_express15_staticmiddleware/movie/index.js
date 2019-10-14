const Router = require('express').Router;
const { listAction, deleteAction } = require('./controller');

const router = Router();

router.get('/', listAction);
router.get('/delete/:id', deleteAction);

module.exports = router;
