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
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaYoutube,
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
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      bg={"teal.300"}
      color={"white.600"}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      align={"center"}
      direction={{ base: "column", md: "row" }}
    >
      <Spacer />

      <Center>
        <Flex direction={isLargerThan768 ? "row" : "column"}>
          <HStack
            spacing={5}
            mr={15}
            justifyContent={isLargerThan768 ? "flex-start" : "center"}
          >
            <Icon as={FaClock} />
            <Text>Mở cửa vào lúc - 09:00 - 21:00</Text>
          </HStack>
          <HStack spacing={5} mx={15}>
            <Icon as={FaEnvelope} />
            <Link href="mailto:minhkelly.trinh@gmail.com">
              <Text>minhkelly.trinh@gmail.com</Text>
            </Link>
            <Icon as={FaPhoneAlt} />
            <Link href="tel:0388084099">
              <Text>038 808 4099</Text>
            </Link>
          </HStack>
        </Flex>
        {isLargerThan768 && (
          <HStack spacing={5} ml={15}>
            <Link href="https://www.facebook.com/mint.foundation" isExternal>
              <AnimatedIcon as={FaFacebookF} color="gray.600" />
            </Link>
            <Link
              href="https://www.tiktok.com/@mint.plus.foundation"
              isExternal
            >
              <AnimatedIcon as={FaTiktok} color="gray.600" />
            </Link>
            <Link href="https://www.instagram.com/mint.foundation/" isExternal>
              <AnimatedIcon as={FaInstagram} color="gray.600" />
            </Link>
            <Link href="https://www.youtube.com/@MinTFoundation" isExternal>
              <AnimatedIcon as={FaYoutube} color="gray.600" />
            </Link>
          </HStack>
        )}
      </Center>

      <Spacer />
    </Flex>
  );
}
