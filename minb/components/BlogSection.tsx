import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

interface BlogPost {
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  avatar: string; // Add this line
}

const blogPosts: BlogPost[] = [
  {
    title: "Salons fulfill your beauty require",
    author: "Author Name 1",
    date: "January 1, 2023",
    image: "/homepage/blog8.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquamssssssssssssssssssssssssssssssssssssss.",
    avatar: "/homepage/team1.jpg",
  },
  {
    title: "Blog Post Title 2",
    author: "Author Name 2",
    date: "February 1, 2023",
    image: "/homepage/blog9.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam .some thing is good you know it.",
    avatar: "/homepage/team2.jpg",
  },
  {
    title: "Blog Post Title 3",
    author: "Author Name 3",
    date: "March 1, 2023",
    image: "/homepage/blog6.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam.",
    avatar: "/homepage/team3.jpg",
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
  return (
    <Box bg="white" p={10} mx={20}>
      <Heading mb={20} textAlign="center">
        Latest News & Events
      </Heading>
      <Flex justify="center">
        {blogPosts.map((post) => (
          <Box key={post.title} mx={5} border="0.3px solid gray">
            <Image src={post.image} alt={post.title} mb={5} />
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
              <Button color={"white"} mt={5} backgroundColor={"teal.300"}>
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
