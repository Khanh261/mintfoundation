import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GallerySectionProps {
  title?: string;
  description?: string;
  galleryImages?: GalleryImage[];
}

const defaultTitle = "Albums";
const defaultDescription =
  "Đây là một sô hình ảnh về quá trinh làm việc của chúng tôi";
const defaultGalleryImages: GalleryImage[] = [
  {
    src: "/homepage/album01.jpg",
    alt: "Album 1",
    category: "Spa",
  },
  {
    src: "/homepage/album04.jpg",
    alt: "Belt 2",
    category: "Spa",
  },

  {
    src: "/homepage/album05.jpg",
    alt: "Belt 2",
    category: "Spa",
  },
  {
    src: "/homepage/album06.jpg",
    alt: "Belt 2",
    category: "Food",
  },
  {
    src: "/homepage/album02.jpg",
    alt: "Belt 2",
    category: "Food",
  },
  {
    src: "/homepage/album03.jpg",
    alt: "",
    category: "Food",
  },

  // ...
];

export default function GallerySection({
  title = defaultTitle,
  description = defaultDescription,
  galleryImages = defaultGalleryImages,
}: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <Box bg="white" borderTop="10px" borderBottom="10px">
      <Container maxW="container.xl" py={16}>
        <Heading color="black.500" mb={4} textAlign="center">
          {title}
        </Heading>
        <Text color="gray.600" mb={8} textAlign="center">
          {description}
        </Text>
        <Box mb={4} textAlign="center">
          {" "}
          {/* Center the buttons */}
          <ButtonGroup justifyContent="center">
            {categories.map((category) => (
              <Button
                key={category}
                colorScheme={selectedCategory === category ? "teal" : undefined}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <SimpleGrid columns={3} spacing={4}>
          {filteredImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              rounded="md"
              border="2px"
              borderColor="teal.300"
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
