"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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

export default function Footer() {
  return (
    <Box bg="teal.400" color="white" p={5} mt={20}>
      <Flex justify="center" direction={{ base: "column", md: "row" }}>
        <Box textAlign="center" mx={20} pr={20} pl={20}>
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
        </Box>

        <Box textAlign="center" mx={20} pr={20} pl={20} pt={5}>
          <Heading size="md" mb={5}>
            Address:
          </Heading>

          <Flex justify="center">
            <a href="#">
              <Box mx={2}>
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </Box>
            </a>

            <a href="#">
              <Box mx={2}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Box>
            </a>
            <a href="#">
              <Box mx={2}>
                <FontAwesomeIcon icon={faGlobe} size="2x" />
              </Box>
            </a>
            <a href="https://www.facebook.com/TrinhMinhBeautySpa">
              <Box mx={2}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Box>
            </a>
            <a href="#">
              <Box mx={2}>
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </Box>
            </a>
            <a href="#">
              <Box mx={2}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Box>
            </a>
            <a href="#">
              <Box mx={2}>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Box>
            </a>
          </Flex>
        </Box>
      </Flex>
      <Text mt={10} textAlign="center">
        ©2023 Copyright by MinT Company. All rights reserved.
      </Text>
    </Box>
  );
}
