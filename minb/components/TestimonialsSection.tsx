"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text textAlign={"center"} color={"white"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} color={"white"}>
          {name}
        </Text>
        <Text fontSize={"sm"} color={"white"}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function TestimonialsSection() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.600")}
      backgroundImage="/homepage/testimonial.jpg"
      backgroundPosition="absolute"
      backgroundSize="cover"
      backgroundColor={"rgba(0,0,0,0.5)"}
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color={"white"}>Feedback</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Dịch vụ tuyệt vời</TestimonialHeading>
              <TestimonialText>
                Trải nghiệm dịch vụ massage cùng vợ ở MinT thấy rất ổn, dịch vụ
                ở Ecopark mà duy trì chất lượng bền thế này thì quá tốt.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Khanh Nguyen"}
              title={"Customer"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Dịch vụ tốt</TestimonialHeading>
              <TestimonialText>
                Gội đầu dưỡng sinh tại spa MinT tôi thấy rất thích và thoải mái
                ,nhân viên đón tiếp rất nhiệt tình ,chu đáo .tôi sẽ giới thiệu
                cho bạn bè tôi
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.vneconomy.vn/images/upload/2022/07/13/elon-musk-met-gala.jpg"
              }
              name={"Nga Bui"}
              title={"Customer"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Cảm thẩy rất hài lòng</TestimonialHeading>
              <TestimonialText>
                Các bạn nhân viên thân thiện, nhiệt tình. Mỗi lần làm thấy rất
                thoải mái. Nói chung là hài lòng :)
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://cafebiz.cafebizcdn.vn/162123310254002176/2023/8/10/mark-zuckerberg-is-back-interview-kleine2ua0r-1691639044611-16916390451821444662577.jpg"
              }
              name={"Khánh Ly Trân"}
              title={"Customer"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
