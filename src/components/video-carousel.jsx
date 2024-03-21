import { useRef } from "react";
import { hightlightsSlides } from "../constants";
import { useState } from "react";
import { useEffect } from "react";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [loadedData, setLoadedData] = useState([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, idx) => (
          <div key={slide.id} className="sm:pr-20 pr-10" id="slider">
            <div className="video-carousel-container">
              <div className="w-full h-full overflow-hidden rounded-3xl bg-black flex-center">
                <video
                  preload="auto"
                  id="video"
                  playsInline={true}
                  muted
                  ref={(e) => (videoRef.current[idx] = e)}
                  onPlay={() => {
                    setVideo((prev) => ({ ...prev, isPlaying: true }));
                  }}>
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((text, idx) => (
                  <p className="md:text-2xl text-xl font-medium" key={idx}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, idx) => (
            <span
              ref={(e) => (videoDivRef.current[idx] = e)}
              key={idx}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer">
              <span
                className="absolute h-full w-full rounded-full"
                ref={(e) => (videoSpanRef.current[idx] = e)}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
