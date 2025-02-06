const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Route to get all videos
router.get('/', videoController.getAllVideos);

// Route to get a video by ID
router.get('/:id', videoController.getVideoById);

// Route to create a new video
router.post('/', videoController.createVideo);

// Route to update a video by ID
router.put('/:id', videoController.updateVideo);

// Route to delete a video by ID
router.delete('/:id', videoController.deleteVideo);

module.exports = router;