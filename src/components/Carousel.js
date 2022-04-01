import { useState } from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  {
    url: "https://www.youtube.com/embed/QhBnZ6NPOY0",
  },
  {
    url: "https://www.youtube.com/embed/QhBnZ6NPOY0",
  },
  {
    url: "https://www.youtube.com/embed/QhBnZ6NPOY0",
  },
  {
    url: "https://www.youtube.com/embed/QhBnZ6NPOY0",
  },
];
function CarouselDemo() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carous">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <div className="flex justify-center  shadow-xl">
              {/* <img src={img.url} alt={img} /> */}
              <AspectRatio ratio={1}>
                <iframe title="naruto" src={img.url} allowFullScreen />
              </AspectRatio>
              <Box bg="tomato" w="100%" p={7} color="white">
                test
              </Box>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselDemo;
