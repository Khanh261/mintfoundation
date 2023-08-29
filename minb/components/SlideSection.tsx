import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Button,
  Heading,
  Text,
  Container,
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

export default function SlideSection() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image: "/homepage/slide06.jpg",
    },
    {
      image: "/homepage/slide05.jpg",
    },
    {
      image: "/homepage/slide08.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"90vh"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {
          slider?.slickPrev();
          setActiveIndex(
            (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
          );
        }}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={useBreakpointValue({ base: "70vh", md: "90vh" })}
            position="relative"
            backgroundPosition="top center"
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="100%" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="60%"
                left="50%"
                transform="translate(-50%, -50%)"
              ></Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
