import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function FoundationSection() {
  return (
    <Box bg="white" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" p={20}>
      <Heading textAlign="center" mb={10}>
        Our Foundation
      </Heading>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box mr={{ base: 0, md: 10 }}>
          <Heading mb={5} color={"teal.300"}>
            Trịnh Minh
          </Heading>
          <Text mb={5} fontSize="23">
            Founder & CEO of MinT Corporation
          </Text>
          <Text mb={5} fontSize="xl">
            Những điều về MinT corporation
          </Text>
          <Text mb={5}>
            1 Công việc chính của mình là Thợ Phun Xăm, là một thợ phun xăm chân
            chính, đôi tay này đam mê phun môi, làm chân mày và phun nhũ hoa. Số
            lượng khách hàng mình đã làm khoảng hơn 1000 người trong khoảng 5
            năm làm việc.
          </Text>
          <Text mb={5}>
            2. Hiện tại mình đang là một người giảng dạy Phun Môi, Phun Mày, với
            hơn 3 năm kinh nghiệm giảng dạy. Những kĩ thuật phun môi, phun mày
            không tê, giữ nguyên cấu trúc môi sau khi làm, ít tổn thương, không
            bong.
          </Text>
          <Text mb={5}>
            3. Mình có hai cơ sở kinh doanh làm đẹp: - Cơ sở 1 ở C1, Ngõ 360 Xã
            Đàn(Trung Phụng), Đống Đa Hà Nội , nơi mình làm dịch vụ phun xăm,
            cho tới tháng 9 dịch vụ chuyên sâu về da ở cơ sở Xã Đàn sẽ có mình
            thực hiện và theo sát liệu trình. - Cơ sở 2 hiện tại ở địa chỉ 105
            Thuỷ Nguyên nơi mình làm dịch vụ phun xăm và MinT- Dưỡng Sinh
            Ecopark. Bạn có thể ghé page Trinh Minh Beauty Academy để tham khảo
            và tìm hiểu thêm về dịch vụ phun xăm. Ở đây bạn được thực hiện kĩ
            thuật trực tiếp bởi Minh và có 3 bạn kĩ thuật viên với mức giá thấp
            hơn nhưng kết quả luôn có sự đảm bảo và cam kết bởi mình.
          </Text>
        </Box>

        <Image
          pl={{ base: 0, md: 20 }}
          src="/homepage/founder_avatar.jpg"
          alt="Founder's Image"
          w={{ base: "100%", md: "50%" }}
          h="100%"
          objectFit="cover"
          borderRadius={2}
        />
      </Flex>
    </Box>
  );
}
