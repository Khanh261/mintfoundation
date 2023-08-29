import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  Badge,
  Button,
} from "@chakra-ui/react";

export default function OurServiceSection() {
  return (
    <Box bgGradient="white" mt={20}>
      <Container maxW="container.xl" py={16}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading color="black.300">Our Services</Heading>
          <Text color="black.200">
            Here are all the stores belonging to the MinT Foundation complex{" "}
          </Text>
          <Flex justify="center" flexWrap="wrap">
            <Service
              imageSrc="/homepage/service1.jpg"
              altText="Flower"
              serviceTitle="Mint Spa"
              buttonText="MinT Health Spa"
              buttonUrl="https://www.facebook.com/TrinhMinhBeautySpa"
            />
            <Service
              imageSrc="/homepage/logo.jpg"
              altText="Coffee"
              serviceTitle="Body Cleanse"
              buttonText="Trinh Minh Beauty Academy"
              buttonUrl="https://www.facebook.com/trinhminhbeautyacademy"
            />

            <Service
              imageSrc="/homepage/service3.jpg"
              altText="Cat"
              serviceTitle="Healthcare"
              buttonText="Mint Bistro"
              buttonUrl="https://www.facebook.com/mint.kafe.club"
            />
            <Service
              imageSrc="/homepage/service4.jpg"
              altText="Gift"
              serviceTitle="Spa Package"
              buttonText="Bếp nhà Nem"
              buttonUrl="https://www.facebook.com/yeubepnhanem"
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

interface ServiceProps {
  imageSrc: string;
  altText: string;
  serviceTitle: string;
  buttonText: string;
  buttonUrl: string; // Add a new prop for the button URL
}

function Service({
  imageSrc,
  altText,
  serviceTitle,
  buttonText,
  buttonUrl,
}: ServiceProps) {
  return (
    <Box
      position="relative"
      mx={4}
      textAlign="center"
      w={["100%", "50%", "25%"]}
    >
      <Image src={imageSrc} alt={altText} boxSize={60} rounded="full" />
      <Badge
        position="absolute"
        bottom={0}
        right={0}
        bg="red.500"
        color="white"
        rounded="full"
        px={2}
      ></Badge>
      <Button
        mt={2}
        colorScheme="teal"
        size="sm"
        onClick={() => (window.location.href = buttonUrl)}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
