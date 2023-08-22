import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  Badge,
} from "@chakra-ui/react";

export default function OurServiceSection() {
  return (
    <Box bgGradient="white">
      <Container maxW="container.xl" py={16}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading color="black.300">Our Services</Heading>
          <Flex justify="center">
            <Service
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/service4.jpg"
              altText="Flower"
              price={30}
            />
            <Service
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/service3.jpg"
              altText="Coffee"
              price={30}
            />
            <Service
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/service2.jpg"
              altText="Gift"
              price={30}
            />
            <Service
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/service1.jpg"
              altText="Cat"
              price={30}
            />
          </Flex>
          <Text color="black.200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

interface ServiceProps {
  imageSrc: string;
  altText: string;
  price: number;
}

function Service({ imageSrc, altText, price }: ServiceProps) {
  return (
    <Box position="relative" mx={4}>
      <Image src={imageSrc} alt={altText} boxSize={60} rounded="full" />
      <Badge
        position="absolute"
        bottom={0}
        right={0}
        bg="red.500"
        color="white"
        rounded="full"
        px={2}
      >
        ${price}
      </Badge>
    </Box>
  );
}
