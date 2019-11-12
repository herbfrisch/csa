const Router = require('express').Router;
const {
  listAction,
  detailAction,
  createAction,
  deleteAction,
  formAction,
  saveAction,
  rateAction,
} = require('./controller');

const router = Router();

router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', createAction);
router.get('/delete/:id', deleteAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);
router.get('/rate/:movie/:rating', rateAction);

module.exports = router;
