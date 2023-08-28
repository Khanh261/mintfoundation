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
    category: "MinT Beauty Academy",
  },
  {
    src: "/homepage/album04.jpg",
    alt: "Belt 2",
    category: "MinT Beauty Academy",
  },

  {
    src: "/homepage/album05.jpg",
    alt: "Belt 2",
    category: "MinT Beauty Academy",
  },
  {
    src: "/homepage/album06.jpg",
    alt: "Belt 2",
    category: "MinT Bistro",
  },
  {
    src: "/homepage/album02.jpg",
    alt: "Belt 2",
    category: "MinT Bistro",
  },
  {
    src: "/homepage/album03.jpg",
    alt: "",
    category: "MinT Bistro",
  },
  {
    src: "/homepage/album08.jpg",
    alt: "",
    category: "MinT Health Spa",
  },
  {
    src: "/homepage/album07.jpg",
    alt: "",
    category: "MinT Beauty Academy",
  },
  {
    src: "/homepage/album09.jpg",
    alt: "",
    category: "MinT Beauty Academy",
  },

  // ...
];

export default function GallerySection({
  title = defaultTitle,
  description = defaultDescription,
  galleryImages = defaultGalleryImages,
}: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [numImages, setNumImages] = useState(6);
  const [showLess, setShowLess] = useState(false);

  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages.slice(0, numImages)
      : galleryImages
          .filter((image) => image.category === selectedCategory)
          .slice(0, numImages);

  const totalImages =
    selectedCategory === "All"
      ? galleryImages.length
      : galleryImages.filter((image) => image.category === selectedCategory)
          .length;

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
        {numImages < totalImages && (
          <Box textAlign="center" mt={4}>
            <Button
              backgroundColor={"teal.300"}
              onClick={() => {
                setNumImages((prevNum) => prevNum + 6);
                setShowLess(true);
              }}
            >
              Load More
            </Button>
          </Box>
        )}
        {showLess && (
          <Box textAlign="center" mt={4}>
            <Button
              backgroundColor={"teal.300"}
              onClick={() => {
                setNumImages((prevNum) => Math.max(prevNum - 6, 6));
                setShowLess(false);
              }}
            >
              Show Less
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
