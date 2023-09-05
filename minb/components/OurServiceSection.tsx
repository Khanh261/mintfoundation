"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  chakra,
  Box,
  Image,
  Badge,
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";

const ServiceContainer = chakra(Box, {
  baseStyle: {
    position: "relative",
    mx: 4,
    textAlign: "center",
    w: ["100%", "50%", "25%"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const ServiceImage = chakra(Image, {
  baseStyle: {
    boxSize: 60,
    rounded: "full",
  },
});

const ServiceBadge = chakra(Badge, {
  baseStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    bg: "red.500",
    color: "white",
    rounded: "full",
    px: 2,
  },
});

const ServiceButton = chakra(Button, {
  baseStyle: {
    mt: 2,
    colorScheme: "teal",
    size: "sm",
    bgColor: "teal.300",
    color: "white",
    "@media (max-width: 600px)": {
      display: "block",
      mx: "auto",
    },
  },
});

export default function OurServiceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Box color={"black"} mt={20} ref={ref} id="#our-services">
        {inView && (
          <Container maxW="container.xl" py={16}>
            <Stack spacing={8} align="center" textAlign="center">
              <Heading color="black.300">Our Services</Heading>
              <Text color="black">
                Here are all the stores belonging to the MinT Foundation{" "}
              </Text>
              <Flex justify="center" flexWrap="wrap">
                <Service
                  imageSrc="/homepage/service1.jpg"
                  altText="Flower"
                  serviceTitle="Mint Spa"
                  buttonText="MinT Health Spa"
                  buttonUrl="https://www.facebook.com/TrinhMinhBeautySpa"
                  buttonStyle={{
                    marginLeft: "auto",
                    marginRight: "20px",
                  }}
                />
                <Service
                  imageSrc="/homepage/logo.jpg"
                  altText="Coffee"
                  serviceTitle="Body Cleanse"
                  buttonText="Trinh Minh Beauty Academy"
                  buttonUrl="https://www.facebook.com/trinhminhbeautyacademy"
                  buttonStyle={{
                    paddingLeft: "10px",
                  }}
                />

                <Service
                  imageSrc="/homepage/service3.jpg"
                  altText="Cat"
                  serviceTitle="Healthcare"
                  buttonText="Mint Bistro"
                  buttonUrl="https://www.facebook.com/mint.kafe.club"
                  buttonStyle={{
                    marginLeft: "auto",
                    marginRight: "30px",
                  }}
                />
                <Service
                  imageSrc="/homepage/service4.jpg"
                  altText="Gift"
                  serviceTitle="Spa Package"
                  buttonText="Bếp nhà Nem"
                  buttonUrl="https://www.facebook.com/yeubepnhanem"
                  buttonStyle={{
                    marginLeft: "auto",
                    marginRight: "20px",
                  }}
                />
              </Flex>
            </Stack>
          </Container>
        )}
      </Box>
    </motion.div>
  );
}

interface ServiceProps {
  imageSrc: string;
  altText: string;
  serviceTitle: string;
  buttonText: string;
  buttonUrl: string;
  buttonStyle?: React.CSSProperties;
}

function Service({
  imageSrc,
  altText,
  serviceTitle,
  buttonText,
  buttonUrl,
}: ServiceProps) {
  return (
    <ServiceContainer>
      <ServiceImage src={imageSrc} alt={altText} />
      <ServiceBadge></ServiceBadge>
      <Box
        display={{ base: "block", md: "inline" }}
        ml={{ base: "auto", md: "initial" }}
        mr={{ base: "auto", md: "initial" }}
      >
        <ServiceButton onClick={() => (window.location.href = buttonUrl)}>
          {buttonText}
        </ServiceButton>
      </Box>
    </ServiceContainer>
  );
}
