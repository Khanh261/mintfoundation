"use client";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      width={330}
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function PriceService() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Dịch vụ phổ biến của MinT Health Spa
        </Heading>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize={24}>
              Gội Thảo Dược
            </Text>
            <HStack justifyContent="center">
              <Text fontSize={14} fontWeight="500">
                Thời gian 50 phút - 80.000đ
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Thả lỏng cơ thể với thảm điện sông ngải cứu{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Làm sạch da đầu với dầu gội thảo dược chuyên dụng
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Dùng tinh dầu Gừng Phụ Thảo massage làm giảm căng thẳng mệt mỏi
                + Massage cổ vai gáy giúp lưu thông khí huyết giảm căng thảng
                mệt mỏi{" "}
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Sử dụng sữa rửa mặt
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Xả sạch và lau khô tóc
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Dùng khăn ấm lau tinh dầu trên cơ thể
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Sấy tóc
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline">
                Contact Now{" "}
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
              boxShadow={"1px 1px 20px 0px rgb(0 0 0 / 10%)"}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("teal.300", "teal.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize={24}>
                Gội Dưỡng Sinh Chuyên Sâu
              </Text>
              <HStack justifyContent="center">
                <Text fontSize={14} fontWeight="500">
                  Thời gian 80 phút - 200.000đ
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Khai huyệt lưu thông vùng đầu{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Chườm nóng bụng và ử chân gối bằng ngải cứu
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Làm sách da đầu bằng thảo được chuyên dụng{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Dùng tinh dầu Gừng Phụ Thảo massage làm giảm căng thẳng mệt
                  mỏi + Massage cổ vai gáy giúp lưu thông khí huyết giảm căng
                  thảng mệt mỏi{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Sử dụng đá nóng để xoa dịu thư giản phần lưng
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Dùng sữa rửa mặt làm sạch bụi bẩn trên da
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Xả sạch và lau khô tóc
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Massage cánh tay và bàn tay{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Dùng khăn lau tinh dầu trên cơ thể{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Sấy khô tóc
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="teal">
                  Contact Now{" "}
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize={24}>
              Gội Dưỡng Sinh Chuyên Sâu
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="14" fontWeight="500">
                Thời gian 90 phút - 250.000đ
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Khai huyệt lưu thông vùng đầu{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Chườm nóng bụng và ử chân gối bằng ngải cứu
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Làm sách da đầu bằng thảo được chuyên dụng{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Dùng tinh dầu Gừng Phụ Thảo massage làm giảm căng thẳng mệt mỏi
                + Massage cổ vai gáy giúp lưu thông khí huyết giảm căng thảng
                mệt mỏi{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Sử dụng đá nóng để xoa dịu thư giản phần lưng
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Dùng sữa rửa mặt làm sạch bụi bẩn trên da
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Xả sạch và lau khô tóc
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Massage cánh tay và bàn tay + Khai thông phần huyệt bàn chân
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Dùng khăn lau tinh dầu trên cơ thể{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Sấy khô tóc + Thưởng thức trà MinT' KaFe
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline">
                Contact Now{" "}
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
