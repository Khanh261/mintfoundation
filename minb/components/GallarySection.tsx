"use client";
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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: gridInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Box bg="white" borderTop="10px" borderBottom="10px">
        <Container maxW="container.xl" py={16}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading color="black.500" mb={4} textAlign="center">
              {title}
            </Heading>
            <Text color="gray.600" mb={8} textAlign="center">
              {description}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box mb={4} textAlign="center">
              <ButtonGroup justifyContent="center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    colorScheme={
                      selectedCategory === category ? "teal" : undefined
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          </motion.div>
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: gridInView ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SimpleGrid columns={3} spacing={4}>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: gridInView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    rounded="md"
                    border="2px"
                    borderColor="teal.300"
                  />
                </motion.div>
              ))}
            </SimpleGrid>
          </motion.div>
          {numImages < totalImages && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
            </motion.div>
          )}
          {showLess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
            </motion.div>
          )}
        </Container>
      </Box>
    </motion.div>
  );
}
