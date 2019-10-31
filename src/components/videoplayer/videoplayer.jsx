import React, { useState, useEffect, useRef } from "react";

const VideoPlayer = ({ width, height, poster, src, isPlaying }) => {
  const videoRef = useRef(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { current: video } = videoRef;
    video.oncanplaythrough = () => {
      setLoading(false);
    };

    return () => {
      video.oncanplaythrough = null;
    };
  }, []);

  useEffect(() => {
    const { current: video } = videoRef;
    if (isLoading) {
      return;
    }

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      muted={true}
      width={width}
      height={height}
      src={src}
      poster={poster}
    />
  );
};

export default VideoPlayer;
