const Router = require('express').Router;
const {
  listAction,
  detailAction,
  createAction,
  updateAction,
} = require('./controller');

const router = Router();

router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', createAction);
router.put('/:id', updateAction);

module.exports = router;
