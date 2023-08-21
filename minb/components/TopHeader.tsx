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
  to { transform: scale(1.2); }
`;

const AnimatedIcon = chakra(Icon, {
  baseStyle: {
    cursor: "pointer",
    borderRadius: "50%",
    p: "2px",
    transition: "all .2s ease-in-out",
    _hover: {
      animation: `${pulse} .5s infinite alternate`,
      borderColor: "currentColor",
      borderWidth: "2px",
      borderStyle: "solid",
    },
  },
});

export default function TopHeader() {
  return (
    <Flex
      bg={"teal.300"}
      color={"white.600"}
      minH={"40px"}
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
          <Link href="https://www.facebook.com" isExternal>
            <AnimatedIcon as={FaFacebookF} />
          </Link>
          <AnimatedIcon as={FaTwitter} />
          <AnimatedIcon as={FaInstagram} />
          <Link href="https://www.google.com" isExternal>
            <AnimatedIcon as={FaGooglePlusG} />
          </Link>
        </HStack>
      </Center>
      <Spacer />
    </Flex>
  );
}
