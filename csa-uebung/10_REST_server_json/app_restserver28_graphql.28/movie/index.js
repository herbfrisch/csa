const Router = require('express').Router;
const {
  listAction,
  detailAction,
  createAction,
  updateAction,
  deleteAction,
} = require('./controller');

const router = Router();

/**
 * @swagger
 * definition:
 *  movie:
 *    properties:
 *      id:
 *        type: integer
 *      title:
 *        type: string
 *      year:
 *        type: integer
 *      public:
 *        type: integer
 *      user:
 *        type: integer
 */

/**
 * @swagger
 * /movie:
 *  get:
 *    tags:
 *      - movies
 *    description: Returns all movies
 *    produces:
 *      - application/json
 *      - application/xml
 *    responses:
 *      200:
 *        description: An array of movie datasets
 *        schema:
 *          $ref: '#/definitions/movie'
 */
router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', createAction);
router.put('/:id', updateAction);
router.delete('/:id', deleteAction);

module.exports = router;
