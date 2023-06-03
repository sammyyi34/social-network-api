const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/tags
router.route('/:thoughtId/reactions').post(createReaction);

module.exports = router;