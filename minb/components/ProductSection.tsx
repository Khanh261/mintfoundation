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
  Center,
} from "@chakra-ui/react";

export default function FeaturedProducts() {
  return (
    <Box bg="white.400" borderTop={"10"}>
      <Container maxW="container.xl" py={16}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading>Our Featured Products</Heading>
          <Flex justify="center">
            <Product
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2019/01/album-1-300x300.jpg"
              altText="Beanie"
              price={20}
              salePrice={18}
            />

            <Product
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2019/01/beanie-2-300x300.jpg"
              altText="Beanie"
              price={20}
            />

            <Product
              imageSrc="https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2019/01/belt-2-300x300.jpg"
              altText="Beanie"
              price={20}
              salePrice={5}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

interface ProductProps {
  imageSrc: string;
  altText: string;
  price: number;
  salePrice?: number;
}

function Product({ imageSrc, altText, price, salePrice }: ProductProps) {
  return (
    <Box position="relative" mx={10}>
      {salePrice && (
        <Badge position="absolute" top={0} right={0} colorScheme="red">
          Sale
        </Badge>
      )}
      <Image src={imageSrc} alt={altText} boxSize={64} rounded="md" />
      <Flex justifyContent="center">
        {salePrice ? (
          <Stack direction="row" align="baseline">
            <Text as="del" color="gray.600">
              ${price}
            </Text>
            <Text fontWeight="bold">${salePrice}</Text>
          </Stack>
        ) : (
          <Text>${price}</Text>
        )}
      </Flex>
      <Button mt={2} colorScheme="teal">
        Add to cart
      </Button>
    </Box>
  );
}
