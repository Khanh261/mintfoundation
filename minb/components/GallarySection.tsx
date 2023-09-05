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
const defaultDescription = "Here are some pictures of our working process";
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
    src: "/homepage/album04.jpg",
    alt: "Belt 2",
    category: "MinT Health Spa",
  },

  {
    src: "/homepage/album05.jpg",
    alt: "Belt 2",
    category: "MinT Beauty Academy",
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
];

export default function GallerySection({
  title = defaultTitle,
  description = defaultDescription,
  galleryImages = defaultGalleryImages,
}: GallerySectionProps) {
  // Simplified the logic for filtering images
  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  // Simplified the logic for animating the grid of images
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <motion.div
      initial={{ opacity: gridInView ? 1 : 0 }}
      animate={{ opacity: gridInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box bg="white" borderTop="10px" borderBottom="10px" color={"black"}>
        <Container maxW="container.xl" py={16} id="#albums">
          <motion.div
            initial={{ opacity: gridInView ? 1 : 0 }}
            animate={{ opacity: gridInView ? 1 : 0 }}
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
            initial={{ opacity: gridInView ? 1 : 0 }}
            animate={{ opacity: gridInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box mb={4} textAlign={"center"}>
              <ButtonGroup justifyContent="center">
                {categories.map((category) => (
                  <Button
                    backgroundColor={"teal.300"}
                    color={"white"}
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
            initial={{ opacity: gridInView ? 1 : 0 }}
            animate={{ opacity: gridInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SimpleGrid columns={3} spacing={4}>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: gridInView ? 1 : 0 }}
                  animate={{ opacity: gridInView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={image.src} alt={image.alt} rounded="md" />
                </motion.div>
              ))}
            </SimpleGrid>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}
