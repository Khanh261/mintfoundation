import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

interface Post {
  title: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    title: "Post Title 1",
    date: "January 1, 2023",
    image: "/images/post1.jpg",
  },
  {
    title: "Post Title 2",
    date: "February 1, 2023",
    image: "/images/post2.jpg",
  },
  {
    title: "Post Title 3",
    date: "March 1, 2023",
    image: "/images/post3.jpg",
  },
];

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Product Name 1",
    price: "$10.99",
    image: "/homepage/blog6-150x150.jpg",
  },
  {
    name: "Product Name 2",
    price: "$20.99",
    image: "/homepage/t-shirt-with-logo-1-300x300.jpg",
  },
  {
    name: "Product Name 3",
    price: "$30.99",
    image: "/homepage/pennant-1-300x300.jpg",
  },
];

export default function Footer() {
  return (
    <Box bg="teal.400" color="white" p={5} mt={20}>
      <Flex justify="center">
        <Box textAlign="center" mx={20}>
          <Heading size="md" mb={5}>
            About Us
          </Heading>
          <Image src="/homepage/spawp-logo.png" alt="Logo" mb={5} mx="auto" />
          <Text maxW="270px" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            MorbiasdasdasdSda aliquam.
          </Text>

          <Flex justify="center" mt={5}>
            <a href="https://www.facebook.com/your-page">
              <Box mx={2}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Box>
            </a>
            <a href="https://twitter.com/your-page">
              <Box mx={2}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Box>
            </a>
            <a href="https://www.instagram.com/your-page">
              <Box mx={2}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Box>
            </a>
            <a href="https://plus.google.com/your-page">
              <Box mx={2}>
                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
              </Box>
            </a>
          </Flex>
        </Box>
        <Box textAlign="center" mx={20}>
          <Heading size="md" mb={5}>
            Products
          </Heading>
          {products.map((product) => (
            <Flex key={product.name} align="center" mb={5} justify="center">
              <Image
                src={product.image}
                alt={product.name}
                w={10}
                h={10}
                mr={5}
                cursor={"pointer"}
              />
              <Box>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.price}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box bg="teal.400" color="white" p={10}>
          <Box textAlign="center" mx={20}>
            <Heading size="md" mb={5}>
              Get In Touch
            </Heading>
            <Text mb={5}>Address :</Text>

            <Flex justify="center">
              {/* Replace the following URLs with the URLs to your contact information */}
              <a href="tel:555-123-4567">
                <Box mx={2}>
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                </Box>
              </a>
              <a href="mailto:info@example.com">
                <Box mx={2}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Box>
              </a>
              <a href="https://www.example.com">
                <Box mx={2}>
                  <FontAwesomeIcon icon={faGlobe} size="2x" />
                </Box>
              </a>
              <a href="https://goo.gl/maps/12345">
                <Box mx={2}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                </Box>
              </a>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text mt={10} textAlign="center">
        ©2023 Copyright by MinhSpa Company. All rights reserved.
      </Text>
      {/* Social media icons */}
    </Box>
  );
}
