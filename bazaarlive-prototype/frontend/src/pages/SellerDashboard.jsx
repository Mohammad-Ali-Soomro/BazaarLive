import React from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';

const SellerDashboard = () => {
    return (
        <div>
            <Navbar />
            <h1>Seller Dashboard</h1>
            <div className="video-list">
                {/* Map through seller's videos and render VideoCard components here */}
                {/* Example: videos.map(video => <VideoCard key={video.id} video={video} />) */}
            </div>
        </div>
    );
};

export default SellerDashboard;