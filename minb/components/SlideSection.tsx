import React, { useRef } from "react";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Button,
  Heading,
  Text,
  Container,
  chakra,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBox = chakra(Box, {
  baseStyle: {
    position: "relative",
    height: "90vh",
    width: "full",
    overflow: "hidden",
  },
});

const SlideIconButton = chakra(IconButton, {
  baseStyle: {
    variant: "ghost",
    position: "absolute",
    transform: "translate(0%, -50%)",
    zIndex: 2,
  },
});

export default function SlideSection() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cardHeight = useBreakpointValue({ base: "70vh", md: "90vh" });

  const cards = [
    {
      image: "/homepage/slide05.jpg",
    },
    {
      image: "/homepage/slide06.jpg",
    },
    {
      image: "/homepage/slide08.jpg",
    },
  ];

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <SlideBox>
      <SlideIconButton
        aria-label="left-arrow"
        left={side}
        top={top}
        onClick={handlePrevClick}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </SlideIconButton>
      <SlideIconButton
        aria-label="right-arrow"
        right={side}
        top={top}
        onClick={handleNextClick}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </SlideIconButton>
      <Slider
        {...settings}
        ref={sliderRef}
        beforeChange={(oldIndex, newIndex) => setActiveIndex(newIndex)}
      >
        {cards.map((card, index) => (
          <LazyLoad key={index} height={cardHeight}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{
                duration: settings.speed / 1000,
              }}
            >
              <Box
                height={cardHeight}
                position="relative"
                backgroundPosition="top center"
                backgroundRepeat="no-repeat"
                backgroundSize="100% 100%"
                backgroundImage={`url(${card.image})`}
              ></Box>
            </motion.div>
          </LazyLoad>
        ))}
      </Slider>
    </SlideBox>
  );
}
