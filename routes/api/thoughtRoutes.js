const router = require('express').Router();
const {getThoughts, createThought, deleteThought, getSingleThought, updateThought, addThoughtReaction, removeThoughtReaction} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/thoughtId/reactions
router.route('/:thoughtId/reactions')
  .put(addThoughtReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeThoughtReaction);

// /api/videos/:videoId/responses/:responseId
// router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);

module.exports = router;
