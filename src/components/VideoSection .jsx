// VideoSection.jsx
import React, { useState } from "react";
import videoThumbnail from "../assets/images/video.png";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="bg-[#f1f2ed] py-12 px-4">
            <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative group">
                {/* Video element */}
                <video
                    className="w-full h-auto object-cover"
                    poster={videoThumbnail}  // <-- Your thumbnail image here
                    controls={isPlaying}
                    autoPlay={isPlaying}
                    muted
                    playsInline
                >
                    <source src="/your-video.mp4" type="video/mp4" /> {/* Your video file */}
                    Your browser does not support the video tag.
                </video>

                {/* Play button overlay (only if video hasn't started) */}
                {!isPlaying && (
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Outer circle with 'Play' text */}
                            <div className="w-28 h-28 rounded-full bg-black/30 border border-white text-white text-sm flex items-center justify-center">

                            </div>
                            {/* Centered triangle play icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-6 border-l-black border-y-6 border-y-transparent ml-1" />
                                </div>
                            </div>
                        </div>
                    </button>
                )}
            </div>
        </section>
    );
};

export default VideoSection;
