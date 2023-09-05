"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Box,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Package {
  title: string;
  time: string;
  price: string;
  listItems: string[];
}

interface CombinedSlideProps {
  packages: Package[];
  heading: string;
  currentSlide: number;
}

function CombinedSlide({ packages, heading }: CombinedSlideProps) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Text
        fontSize={isLargerThan768 ? 35 : 24}
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color={"black"}
      >
        {heading}
      </Text>
      <Flex
        justifyContent={"center"}
        flexDirection={isLargerThan768 ? "row" : "column"}
        color={"black"}
      >
        {packages.map((pkg, index) => (
          <Box
            key={index}
            width={isLargerThan768 ? 440 : "100%"}
            mb={4}
            borderWidth="1px"
            alignSelf={{ base: "center", lg: "flex-start" }}
            borderColor={"gray.400"}
            borderRadius={"xl"}
            margin={10}
            height={isLargerThan768 ? 900 : "auto"}
          >
            <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize={24}>
                  {pkg.title}
                </Text>
                <Text fontSize={20} fontWeight="500">
                  {pkg.time} {pkg.price}
                </Text>
              </Box>
              <List
                spacing={3}
                textAlign="start"
                px={12}
                fontSize={17}
                height={500}
              >
                {pkg.listItems.map((item) => (
                  <ListItem key={item}>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </VStack>
          </Box>
        ))}
      </Flex>
    </>
  );
}

const packages1 = [
  {
    title: "Gội Thảo Dược",
    time: "50 phút",
    price: "80.000đ",
    listItems: [
      "Thả lỏng cơ thể với thảm điện sông ngải cứu",
      "Làm sạch da đầu với dầu gội thảo dược chuyên dụng",
      "Dùng tinh dầu Gừng Phụ Thảo massage làm giảm căng thẳng mệt mỏi + Massage cổ vai gáy giúp lưu thông khí huyết giảm căng thẳng mệt mỏi",
      "Sử dụng sữa rửa mặt",
      "Xả sạch và lau khô tóc",
      "Dùng khăn ấm lau tinh dầu trên cơ thể",
      "Sấy tóc",
    ],
  },
  {
    title: "Gội Dưỡng Sinh Chuyên Sâu",
    time: "80 phút",
    price: "200.000đ",
    listItems: [
      "Khai huyệt lưu thông vùng đầu",
      "Chườm nóng bụng và ử chân gối bằng ngải cứu",
      "Làm sạch da đầu bằng thảo được chuyên dụng",
      "Dùng tinh dầu Gừng Phụ Thảo massage làm giảm căng thẳng mệt mỏi + Massage cổ vai gáy giúp lưu thông khí huyết giảm căng thẳng mệt mỏi",
      "Sử dụng đá nóng để xoa dịu thư giản phần lưng",
      "Dùng sữa rửa mặt làm sạch bụi bẩn trên da",
      "Xả sạch và lau khô tóc",
      "Massage cánh tay và bàn tay",
      "Dùng khăn lau tinh dầu trên cơ thể",
      "Sấy khô tóc",
    ],
  },
  {
    title: "  Gội Dưỡng Sinh Chuyên Sâu",
    time: "90 phút",
    price: "250.000đ",
    listItems: [
      "Khai huyệt lưu thông vùng đầu",
      "Chườm nóng bụng và ử chân gối bằng ngải cứu",
      "Làm sạch da đầu bằng thảo được chuyên dụng",
      "Dùng tinh dầu Gừng Phụ Thảo massage làm giảm căng thẳng mệt mỏi + Massage cổ vai gáy giúp lưu thông khí huyết giảm căng thẳng mệt mỏi",
      "Sử dụng đá nóng để xoa dịu thư giản phần lưng",
      "Dùng sữa rửa mặt làm sạch bụi bẩn trên da",
      "Xả sạch và lau khô tóc",
      " Massage cánh tay và bàn tay + Khai thông phần huyệt bàn chân",
      "Dùng khăn lau tinh dầu trên cơ thể",
      " Sấy khô tóc + Thưởng thức trà MinT' KaFe",
    ],
  },
];

const packages2 = [
  {
    title: "Combo 1 - Sườn heo tảng",
    time: "",
    price: "350.000đ (2 Người / Person)",
    listItems: [
      "500gr Dẻ Sườn - 500gr whole pork Ribs",
      "1 Salad nhỏ - 1 Salad (small)",
      "1 đĩa Khoai tây chiên nhỏ - 1 French Fries (small)",
      "2 Bánh mì - 2 Breads",
    ],
  },
  {
    title: "Combo 2 - Sườn heo tảng",
    time: "",
    price: "520.000đ (2 Người / Person)",
    listItems: [
      "1 Kg Dẻ Sườn - 1 Kg whole pork Ribs",
      "1 Salad - 1 Salad",
      "1 đĩa Khoai tây chiên - 1 French Fries ",
      "3 Bánh mì - 3 Breads",
    ],
  },
  {
    title: "Combo 3 - Bò nướng",
    time: "",
    price: "450.000đ (3-4 Người / Person)",
    listItems: [
      "540gr Dẻ Sườn - 540gr whole pork Ribs",
      "1 Salad nhỏ - 1 Salad (small)",
      "1 đĩa Khoai tây chiên nhỏ - 1 French Fries (small) ",
      "3 Bánh mì - 3 Breads",
    ],
  },
  {
    title: "Combo 4 - Bò nướng",
    time: "",
    price: "829.000đ (3-4 Người / Person)",
    listItems: [
      "900gr Dẻ Sườn - 900gr whole pork Ribs",
      "1 Salad  - 1 Salad ",
      "1 đĩa Khoai tây chiên  - 1 French Fries",
      "3 Bánh mì - 3 Breads",
    ],
  },
];

const packages3 = [
  {
    title: "By Master",
    time: "",
    price: "",
    listItems: [
      "Phun môi (Môi không thâm) - 6.200.000đ",
      "Phun môi (Môi thâm) - 6.500.000đ",
      "Phun mày (Mày chưa làm - 6.000.000đ",
      "Chân mày Hairstroke - 6.000.000đ",
      "Laser chân mày - 4.000.000đ",
      "Hút dịch dung môi - 1.500.000đ",
      "Combo hút dung dịch - 4.000.000đ",
    ],
  },
  {
    title: "By Artist",
    time: "",
    price: "",
    listItems: [
      "Phun môi (Môi không thâm) - 4.200.000đ",
      "Phun môi (Môi thâm) - 4.500.000đ",
      "Phun mày (Mày chưa làm - 4.000.000đ",
      "Chân mày Hairstroke - 4.000.000đ",
      "Mày/Môi chỉnh sửa + 1.000.000",
    ],
  },
];

const packages4 = [
  {
    title: "Set 1: 250k",
    time: "",
    price: "",
    listItems: [
      "450gr Nầm , Ba Chỉ, Lòng (150gr Nầm, 150gr Ba chỉ, 150gr Lòng)",
      "1 rau củ quả)",
      "2 bánh mì)",
    ],
  },
  {
    title: "Set 2: 460k",
    time: "",
    price: "",
    listItems: [
      "900gr Nầm ,Bò , Ba Chỉ, Lòng (300gr Nầm, 200gr Ba chỉ, 200gr Lòng, 200gr Bò)",
      "2 rau củ quả)",
      "4 bánh mì)",
    ],
  },
  {
    title: "Đồ Gọi Thêm",
    time: "",
    price: "",
    listItems: [
      "Thịt : 130.000đ/đĩa(2 món = 300gr)",
      "Rau: 15.000đ)",
      "Củ quả: 15.000đ)",
      "Bơ: 10.000đ",
      "Kim chi: 20.000đ",
    ],
  },
  {
    title: "Đồ Uống",
    time: "",
    price: "",
    listItems: [
      "Trà đá: 3000đ",
      "Trà đá: 10.000đ/bình",
      "Lavie: 10.000đ)",
      "Nước ngọt: 15.000đ",
      "Bia: 20.000đ",
    ],
  },
];

const packages5 = [
  {
    title: "Dịch vụ chăm sóc tóc (Hair wash and more)",
    time: "",
    price: "",
    listItems: [
      "Gội trẻ em 35 phút - 35.000đ",
      "Gội và xông thảo dược - 80.000đ",
      "Tẩy da chết đầu - 100.000đ",
      "Gội dưỡng sinh (80 phút) - 200.000đ",
      "Gội dưỡng sinh chuyên sâu 90 phút - 250.000đ",
      "Gội canh thuốc trị liệu - 350.000đ",
      "Hấp tóc - 250.000đ",
    ],
  },
  {
    title: "Trị liệu cơ thể (Body therapy)",
    time: "",
    price: "",
    listItems: [
      "Trị liệu cổ vai gáy (60 phút) - 350.000đ",
      "Trị liệu cổ vai gáy (90 phút) - 450.000đ",
      "Trị liệu phụ khoa - 300.000đ",
    ],
  },
  {
    title: "Massage chăm sóc sức khỏe (Body massage wellness)",
    time: "",
    price: "",
    listItems: [
      "Full body massage (60 phút) - 300.000đ",
      "Full body massage (90 phút) - 400.000đ",
      "Deluxe Body HealCare (60 phút) - 450.000",
      "Luxury Body HealCare (90 phút) - 600.000đ",
      "Foot Massage - 250.000đ",
    ],
  },
];

export default function PriceService() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Box bgGradient="white" mt={20} ref={ref}>
        {inView && (
          <Container maxW="container.xl" py={16}>
            <Slider {...settings}>
              <CombinedSlide
                packages={packages1}
                heading="Popular Services in MinT Spa"
                currentSlide={0}
              />
              <CombinedSlide
                packages={packages2}
                heading="MinT Bistro"
                currentSlide={1}
              />
              <CombinedSlide
                packages={packages3}
                heading="Trịnh Minh Beauty Academy"
                currentSlide={2}
              />
              <CombinedSlide
                packages={packages4}
                heading="Nầm nướng EcoPark"
                currentSlide={3}
              />
              <CombinedSlide
                packages={packages5}
                heading="Mint Health Spa"
                currentSlide={4}
              />
            </Slider>
          </Container>
        )}
      </Box>
    </motion.div>
  );
}
