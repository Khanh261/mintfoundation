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
          <Heading color="black.300">Cửa hàng của chúng tôi</Heading>
          <Text color="black.200">
            Dưới đây là toàn bộ các cửa hàng thuộc tổ hợp MinT Foundation
          </Text>
          <Flex justify="center">
            <Service
              imageSrc="/homepage/service1.jpg"
              altText="Flower"
              serviceTitle="Mint Spa"
              buttonText="MinT - Dưỡng Sinh Ecopark"
            />
            <Service
              imageSrc="/homepage/logo.jpg"
              altText="Coffee"
              serviceTitle="Body Cleanse"
              buttonText="Trinh Minh Beauty Academy"
            />
            <Service
              imageSrc="/homepage/service4.jpg"
              altText="Gift"
              serviceTitle="Spa Package"
              buttonText="Bếp nhà Nem - Nầm bò nướng Ecopark"
            />
            <Service
              imageSrc="/homepage/service3.jpg"
              altText="Cat"
              serviceTitle="Healthcare"
              buttonText="Mint Bistro"
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
  buttonText: string; // Add a new prop for the button text
}

function Service({
  imageSrc,
  altText,
  serviceTitle,
  buttonText,
}: ServiceProps) {
  return (
    <Box position="relative" mx={4} textAlign="center">
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
        onClick={() => alert(buttonText)}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
