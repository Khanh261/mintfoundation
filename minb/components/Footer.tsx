"use client";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterBox = chakra(Box, {
  baseStyle: {
    bg: "teal.400",
    color: "white",
    p: { base: "3", md: "5" },
    mt: { base: "10", md: "20" },
  },
});

const FooterFlex = chakra(Flex, {
  baseStyle: {
    justify: "center",
    direction: { base: "column", md: "row" },
    alignItems: { base: "center", md: "stretch" },
    gap: { base: "5", md: "0" },
  },
});

const FooterContentBox = chakra(Box, {
  baseStyle: {
    textAlign: "center",
    mx: { base: "1", md: "10" },
    pr: { base: "1", md: "20" },
    pl: { base: "1", md: "20" },
    pt: { base: "0", md: "5" },
    display: "block",
  },
});

const FooterHeading = chakra(Heading, {
  baseStyle: {
    size: { base: "sm", md: "md" },
    mb: { base: "2", md: "5" },
  },
});

const FooterText = chakra(Text, {
  baseStyle: {
    maxW: { base: "100%", md: "800px" },
    mx: { base: "0", md: "auto" },
    mt: { base: "2", md: "5" },
    fontSize: { base: "sm", md: "md" },
  },
});

const FooterIconBox = chakra(Box, {
  baseStyle: {
    mx: { base: "1", md: "2" },
    pt: "15px",
  },
});

export default function Footer() {
  return (
    <FooterBox id="#footer">
      <FooterFlex flexDir={{ base: "column", md: "row" }}>
        {/* Google Map */}
        <FooterContentBox order={{ base: 2, md: 1 }}>
          <iframe
            width="600"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.112498314831!2d105.9365725!3d20.9479969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135afc3c825f93b%3A0x5177a91908a58435!2sMinT%20-%20D%C6%B0%E1%BB%A1ng%20sinh%20Ecopark!5e0!3m2!1svi!2s!4v1693761628987!5m2!1svi!2s"
          ></iframe>
        </FooterContentBox>{" "}
        {/* About Us */}
        <FooterContentBox order={{ base: 1, md: 2 }}>
          <FooterHeading id="footer">About us </FooterHeading>

          <FooterText>
            MinT + là một tổ hợp bao gồm MinT Kafe’ & Club bao trọn không gian
            tầng 1, MinT Beauty Academy dành cho khách hàng phun xăm và làm đẹp
            spa . Minh tạo ra MinT+ với mong muốn rằng mọi người khi tới có thể
            cùng với những chuyên gia mới, nơi bạn có thể làm đẹp, có thể nghỉ
            ngơi, có thể chill, thậm chí có thể thức tới sáng cùng mình nơi với
            tất cả tâm huyết của mình, xây một cách chậm dãi, từ tốn, vững chắc.
          </FooterText>
          <Flex justify="center">
            <a href="https://www.facebook.com/TrinhMinhBeautySpa">
              <FooterIconBox>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </FooterIconBox>
            </a>
            <a href="#">
              <FooterIconBox>
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </FooterIconBox>
            </a>
            <a href="#">
              <FooterIconBox>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </FooterIconBox>
            </a>
            <a href="#">
              <FooterIconBox>
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </FooterIconBox>
            </a>
          </Flex>
        </FooterContentBox>
      </FooterFlex>
      <Text mt={{ base: "5", md: "10" }} textAlign="center">
        ©2023 Copyright by MinT Company. All rights reserved.
      </Text>
    </FooterBox>
  );
}
