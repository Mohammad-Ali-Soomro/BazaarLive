// videoController.js

const Video = require('../models/Video');

// Get all videos
exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a video by ID
exports.getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new video
exports.createVideo = async (req, res) => {
    const video = new Video(req.body);
    try {
        const savedVideo = await video.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a video by ID
exports.updateVideo = async (req, res) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVideo) return res.status(404).json({ message: 'Video not found' });
        res.status(200).json(updatedVideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a video by ID
exports.deleteVideo = async (req, res) => {
    try {
        const deletedVideo = await Video.findByIdAndDelete(req.params.id);
        if (!deletedVideo) return res.status(404).json({ message: 'Video not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};