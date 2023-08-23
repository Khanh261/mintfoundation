import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface Expert {
  name: string;
  title: string;
  image: string;
  description: string;
}

const experts: Expert[] = [
  {
    name: "Gabriel",
    title: "Aesthetician",
    image:
      "https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/team1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    name: "Lorenzo",
    title: "Hairstylist",
    image:
      "https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/team4.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    name: "Eleonora",
    title: "Manicurist",
    image:
      "https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/team2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    name: "Brielle",
    title: "Salon Manager",
    image:
      "https://www.britetechs.com/demo/themes/spawp-pro/wp-content/uploads/2021/03/team3.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
];

export default function FoundationSection() {
  return (
    <Box bg="white" p={10}>
      <Heading mb={10} textAlign={"center"}>
        Our Professional Experts
      </Heading>
      <Text mb={10} textAlign={"center"}>
        Founder of this spa
      </Text>
      <Flex justify="space-between">
        {experts.map((expert) => (
          <Box
            key={expert.name}
            textAlign="center"
            className="team-box"
            p={3}
            borderRadius={2}
            transition="all .3s ease-in-out"
            border="1px solid var(--border-color)"
          >
            <Box
              as="img"
              src={expert.image}
              alt={expert.name}
              rounded="full"
              w={20}
              h={20}
              mx="auto"
              mb={2}
            />
            <Text fontWeight="bold">{expert.name}</Text>
            <Text>{expert.title}</Text>
            <Text>{expert.description}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
