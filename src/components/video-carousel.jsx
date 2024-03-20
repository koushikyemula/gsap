import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, idx) => (
          <div key={slide.id} className="sm:pr-20 pr-10" id="slider">
            <div className="video-carousel-container">
              <div className="w-full h-full overflow-hidden rounded-3xl bg-black flex-center">
                <video preload="auto" id="video" playsInline={true} muted>
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
    </>
  );
};

export default VideoCarousel;
