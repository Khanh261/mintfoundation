"use client";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BlogPost {
  id?: number;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  avatar: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Liệu trình laser cacbon",
    author: "Author Name 1",
    date: "January 1, 2023",
    image: "/homepage/album01.jpg",
    excerpt:
      "Hãy cùng MinT tìm hiểu dịch vụ ” Hot” nhất hiện tại nhà MinT nha ❤\n🌱Liệu trình laser cacbon, hay còn gọi là Carbon Laser Peel, là một phương pháp thẩm mỹ không phẫu thuật sử dụng công nghệ laser để cải thiện tình trạng da mặt. Đây là một phương pháp phổ biến được sử dụng để cải thiện làn da tổn thương, trị mụn và giảm thiểu vết nhăn nhờ sự kết hợp giữa laser và cacbon.\n🌱Quy trình Carbon Laser Peel diễn ra như sau:\nĐầu tiên, da mặt sẽ được làm sạch grime, bụi bẩn và lớp tế bào chết.\nSau đó, một lớp gel chứa cacbon sẽ được thoa lên da mặt. Cacbon có khả năng hấp thụ ánh sáng laser.\nTiếp theo, một máy laser sẽ được sử dụng để phát ra những xung laser vào da. Ánh sáng laser sẽ tương tác với cacbon, làm cho lớp cacbon nhanh chóng bay hơi và lấy đi các tạp chất trên da, gồm bụi bẩn, dầu, bã nhờn và tế bào chết.\nKhi laser xâm nhập vào da, nó còn kích thích quá trình tái tạo tế bào da mới, giúp làm dịu vết thâm mụn, sáng da và giảm thiểu nếp nhăn nhờ cải thiện sự đàn hồi của da.\n🌱Lợi ích của liệu trình laser cacbon bao gồm:\nLàm sạch sâu da mặt, giúp giảm thiểu mụn và kiểm soát dầu nhờn.\nGiảm vết thâm mụn và làm đều màu da.\nGiảm kích thước lỗ chân lông, làm mờ vết nhăn và sự xuất hiện của nếp nhăn nhờ cải thiện độ đàn hồi của da.\nLàm sáng da, làm mờ sẹo nhỏ, giúp da mặt trở nên mềm mại và mịn màng hơn.\nDịch vụ mới - ngập tràn ưu đãi mới  ❤",
    avatar: "/homepage/album05.jpg",
    url: "https://www.facebook.com/reel/4216490865243446",
  },

  {
    id: 2,
    title: "MASSAGE Foot 60p cùng đá nóng tinh dầu",
    author: "Author Name 2",
    date: "February 1, 2023",
    image: "/homepage/footmassageblog.jpg",
    excerpt:
      "🌿 Massage foot với đá nóng tinh dầu là hình thức tác động lên cơ thể con người dưới dạng sóng, tạo ra các rung động cực nhỏ giúp tăng cường năng lượng trong cơ thể thông qua hoạt động kích thích sâu và mạnh vào các huyệt đạo, chân và các cơ quan trên cơ thể.🌿 Các động tác massage nhẹ nhàng, kết hợp cùng tinh dầu và đá nóng được các chuyên viên thực hiện bài bản, ấn sâu vào các huyệt đạo của cơ thể đem đến cảm giác thư giãn nhất cho khách hàng.     🌿 Mỗi liệu trình massage chân cùng đá nóng và tinh dầu tại MinT Spa kéo dài trong 60’ và được nhiều khách hàng yêu thích bởi tác dụng chữa lành tâm hồn và thể chất mà phương pháp trị liệu này mang lại:     🔹 Giảm triệu chứng mất ngủ: Việc massage bằng đá nóng giúp cơ thể khoan khoái, khỏe khoắn và dễ dàng đi vào giấc ngủ, mang đến giấc ngủ ngon và sâu hơn.      🔹 Cân bằng tâm lý, giảm mệt mỏi: Đá nóng trong massage có tác dụng làm cân bằng tâm lý, giảm stress, căng thẳng, mệt mỏi và hỗ trợ điều trị một số bệnh về xương khớp.       🔹 Lưu thông tuần hoàn máu: Massage bằng đá nóng và tinh dầu còn có công dụng giúp tuần hoàn máu lưu thông tốt, giãn mạch máu dưới da, tăng cường khả năng tuần hoàn máu trong cơ thể diễn ra với tốc độ nhanh hơn.",
    avatar: "/homepage/album05.jpg",
    url: "https://www.facebook.com/photo/?fbid=962008455164146&set=a.733742044657456", // Add this line
  },
  {
    id: 3,
    title: "TIPS GỘI ĐẦU HAY 4 NGÀY KHÔNG BẾT ",
    author: "Author Name 3",
    date: "March 1, 2023",
    image: "/homepage/album04.jpg",
    excerpt:
      "Ngày hôm nay nhà MinT sẽ chia sẻ những kinh nghiệm nho nhỏ khiến mái tóc lâu bết hơn ,dành cho các chị em đánh bay cái nắng nóng mùa hè này . “ Luôn giữ được cái đầu lạnh để tinh thần tràn đầy sảng khoải” cả nhà nha. Bước 1 : mọi người cố gắng gội sạch đầu hoàn toàn để loại bỏ các cặn dư thừa của các sản phẩm dưỡng tinh dầu tránh tích tụ gây lên gàu, ngứa .Bước 2 : tẩy tế bào chết cho da đầu, vì dầu gội thông thường sẽ không loại bỏ được hoàn toàn các bụi bẩn, da đầu, dầu và gàu ( nên chọn loại hạt muối biển nhỏ trên nền gel để làm sạch da đầu mà không rát ). Tuần 1/2 lần Bước 3: mọi người nhớ tạo bung bọt lên rồi mới gội nha, gội hết phần da đầu đừng quên phần nào hết nhất là phần gáy và sau mang tai. Nếu không tẩy da chết thì nên gội 2 lần dầu cho sạch Bước 4 : dầu xả và kem ủ chỉ dùng cho phần thân và đuôi, không nên bôi trực tiếp vào da đầu Bước 5 : xả đầu thật sạch và sấy khô tóc luôn đừng để tóc khô tự nhiên sẽ dễ gây rối tóc , rụng tóc  Cuối cùng, nếu mọi người thấy các bước trên có cầu kì quá thì hãy để MinT lo cho mái tóc của bạn 🥰 MinT tin rằng trong các gói gội của mình sẽ đầy đủ các bước, đủ lâu, đủ phê, sử dụng các dòng sản phẩm thiên nhiên tốt cho tóc của bạn, được chăm chút từng sợi một. Và khách thường Feedback sau khi đến với MinT thì có khi 4,5 ngày mới phải gội đầu lại. Không còn ngứa , lại còn được massage vai cổ gáy dễ chịu hẳn ♥️",
    avatar: "/homepage/album05.jpg",
    url: "https://www.facebook.com/photo?fbid=953188306046161&set=a.733742044657456", // Add this line
  },
];

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  } else {
    return text;
  }
}

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      ref={ref}
    >
      <Box id="#blog" p={10} mx={20} color={"black"}>
        <Heading mb={20} textAlign="center">
          Latest News & Events
        </Heading>
        <Flex
          justify="center"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          {" "}
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              style={{
                flex: "0 0 calc(33.33% - 20px)",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Box
                key={post.title}
                mx={5}
                my={5}
                borderRadius={"24px"}
                border="0.3px solid gray"
                flexDirection="column"
                flexGrow={1}
                display="flex"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  mb={5}
                  borderRadius={"25px"}
                  flex="1"
                />
                <Box p={5}>
                  <Flex align="center">
                    <Avatar name={post.author} src={post.avatar} mr={3} />
                    <Box>
                      <Text fontWeight="bold">{post.author}</Text>
                      <Text>{post.date}</Text>
                    </Box>
                  </Flex>
                  <Text fontWeight="bold" mt={5}>
                    {post.title}
                  </Text>
                  <Text>{truncateText(post.excerpt, 100)}</Text>
                  <a href={post.url}>
                    <Button color={"white"} mt={5} backgroundColor={"teal.300"}>
                      Visit site
                    </Button>
                  </a>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </motion.div>
  );
}
