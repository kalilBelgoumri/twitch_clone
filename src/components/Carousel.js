import { useState } from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  {
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
            <div className="flex shadow-xl">
              <img src={img.url} alt={img} />
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
