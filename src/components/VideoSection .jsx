import React, { useState } from "react";
import videoThumbnail from "../assets/images/video.png";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        if (!isPlaying) setShowCursor(true);
    };

    const handleMouseLeave = () => setShowCursor(false);

    return (
        <section
            className="bg-[#f1f2ed] py-12 px-4 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative group">
                {/* Video element */}
                <video
                    className="w-full h-auto object-cover"
                    poster={videoThumbnail}
                    controls={isPlaying}
                    autoPlay={isPlaying}
                    muted
                    playsInline
                >
                    <source src="/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Click to play overlay */}
                {!isPlaying && (
                    <button
                        onClick={() => {
                            setIsPlaying(true);
                            setShowCursor(false); // hide cursor once playing
                        }}
                        className="absolute inset-0 flex items-center justify-center z-20"
                    >
                        {/* Transparent clickable area */}
                        <span className="sr-only">Play Video</span>
                    </button>
                )}
            </div>

            {/* Custom Cursor for 'Play' */}
            {showCursor && (
                <div
                    className="pointer-events-none fixed z-50 transition-transform duration-150"
                    style={{
                        top: cursorPos.y - 40,
                        left: cursorPos.x - 40,
                    }}
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                                    rounded-full border border-white/80 
                                    flex items-center justify-center 
                                    text-white text-xs sm:text-sm md:text-base
                                    backdrop-blur-sm ">
                        Play
                    </div>
                </div>
            )}
        </section>
    );
};

export default VideoSection;
