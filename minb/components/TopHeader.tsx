"use client";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Icon,
  HStack,
  Link,
  Center,
  chakra,
} from "@chakra-ui/react";
import {
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  from { transform: scale(1); }
  to { transform: scale(2); }
`;

const AnimatedIcon = chakra(Icon, {
  baseStyle: {
    cursor: "pointer",
    borderRadius: "100%",
    p: "1px",
    transition: "all .5s ease-in-out",
    _hover: {
      animation: `${pulse} .5s infinite alternate`,
      borderColor: "currentColor",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
});

export default function TopHeader() {
  return (
    <Flex
      bg={"teal.300"}
      color={"white.600"}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      align={"center"}
    >
      <Spacer />

      <Center>
        <HStack spacing={5} mr={15}>
          <Icon as={FaClock} />
          <Text>Opening Hours - 9am to 9pm</Text>
        </HStack>
        <HStack spacing={5} mx={15}>
          <Icon as={FaEnvelope} />
          <Link>
            <Text>info@example.com</Text>
          </Link>
          <Icon as={FaPhoneAlt} />
          <Link>
            <Text>+1234567890</Text>
          </Link>
        </HStack>
        <HStack spacing={5} ml={15}>
          <AnimatedIcon as={FaFacebookF} color="#1877F2" />
          <AnimatedIcon as={FaTwitter} color="#1DA1F2" />
          <AnimatedIcon as={FaInstagram} color="#C13584" />
          <Link href="https://www.google.com" isExternal>
            <AnimatedIcon as={FaGooglePlusG} color="red" />
          </Link>
        </HStack>
      </Center>
      <Spacer />
    </Flex>
  );
}
