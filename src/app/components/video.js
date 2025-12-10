"use client";

import React from "react";
import "./video.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      
      {/* Small Top Heading */}
      <p className="video-subtitle">// Videos</p>

      {/* Main Heading */}
      <h2 className="video-heading">
        Our <span>Work Showcase</span>
      </h2>

      <div className="video-container">

        {/* Video 1 */}
        <div className="video-box">
          <video
            src="/video/video_01.mp4"
            muted
            loop
            className="video-player"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          ></video>

          {/* Play Icon */}
          <div className="play-icon">▶</div>

          {/* Label */}
          <div className="video-label">This is Video 01</div>
        </div>

        {/* Video 2 */}
        <div className="video-box">
          <video
            src="/video/video_02.mp4"
            muted
            loop
            className="video-player"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          ></video>

          {/* Play Icon */}
          <div className="play-icon">▶</div>

          {/* Label */}
          <div className="video-label">This is Video 02</div>
        </div>

      </div>
    </section>
  );
}
