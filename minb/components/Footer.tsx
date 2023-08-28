"use client";
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
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FaTiktok } from "react-icons/fa";

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
        <Box textAlign="center" mx={20} pr={20}>
          <Heading size="md" mb={5}>
            About us{" "}
          </Heading>

          <Text maxW="800px" mx="auto">
            MinT + là một tổ hợp bao gồm MinT Kafe’ & Club bao trọn không gian
            tầng 1, MinT Beauty Academy dành cho khách hàng phun xăm và làm đẹp
            spa . Minh tạo ra MinT+ với mong muốn rằng mọi người khi tới có thể
            cùng với những chuyên gia mới, nơi bạn có thể làm đẹp, có thể nghỉ
            ngơi, có thể chill, thậm chí có thể thức tới sáng cùng mình nơi với
            tất cả tâm huyết của mình, xây một cách chậm dãi, từ tốn, vững chắc.
          </Text>

          <Flex justify="center" mt={5}>
            <a href="https://www.facebook.com/TrinhMinhBeautySpa">
              <Box mx={2}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Box>
            </a>
            <a href="https://www.tiktok.com/@mint.plus.foundation">
              <Box mx={2}>
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </Box>
            </a>
            <a href="https://www.instagram.com/mint.foundation">
              <Box mx={2}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Box>
            </a>
            <a href="https://www.youtube.com/@MinTFoundation">
              <Box mx={2}>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Box>
            </a>
          </Flex>
        </Box>

        <Box textAlign="center" mx={20}>
          <Heading size="md" mb={5}>
            Address:
          </Heading>

          <Flex justify="center">
            <a href="tel:0388084099">
              <Box mx={2}>
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </Box>
            </a>

            <a href="mailto:minhkelly.trinh@gmail.com">
              <Box mx={2}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Box>
            </a>
            <a href="https://www.google.com/maps/place/MinT+-+D%C6%B0%E1%BB%A1ng+sinh+Ecopark/@20.9480019,105.9339922,17z/data=!3m1!4b1!4m6!3m5!1s0x3135afc3c825f93b:0x5177a91908a58435!8m2!3d20.9479969!4d105.9365725!16s%2Fg%2F11t9qyb60f?hl=vi-VN&entry=tts&shorturl=1">
              <Box mx={2}>
                <FontAwesomeIcon icon={faGlobe} size="2x" />
              </Box>
            </a>
          </Flex>
        </Box>
      </Flex>
      <Text mt={10} textAlign="center">
        ©2023 Copyright by MinT Company. All rights reserved.
      </Text>
      {/* Social media icons */}
    </Box>
  );
}
