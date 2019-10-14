const Router = require('express').Router;
const { listAction, deleteAction, formAction } = require('./controller');

const router = Router();

router.get('/', listAction);
router.get('/delete/:id', deleteAction);
router.get('/form/:id?', formAction);

module.exports = router;
