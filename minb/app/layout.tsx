"use client";
import dynamic from "next/dynamic";
import { Box, ChakraProvider } from "@chakra-ui/react";

const DynamicNavbar = dynamic(() => import("@/components/Navbar"));
const DynamicTopHeader = dynamic(() => import("@/components/TopHeader"));
const DynamicSlideSection = dynamic(() => import("@/components/SlideSection"));
const DynamicPriceService = dynamic(() => import("@/components/PriceService"));
const DynamicTestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection")
);
const DynamicOurServiceSection = dynamic(
  () => import("@/components/OurServiceSection")
);
const DynamicFoundationSection = dynamic(
  () => import("@/components/FoundationSection")
);
const DynamicFooter = dynamic(() => import("@/components/Footer"));
const DynamicBlogSection = dynamic(() => import("@/components/BlogSection"));
const DynamicGallerySection = dynamic(
  () => import("@/components/GallarySection")
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "white" }}>
        <ChakraProvider>
          <Box height="93px" />
          <DynamicTopHeader />
          {children}
          <DynamicNavbar />
          <DynamicSlideSection />
          <DynamicOurServiceSection />
          <DynamicGallerySection />
          <DynamicPriceService />
          <DynamicBlogSection />
          <DynamicTestimonialsSection />
          <DynamicFoundationSection />
          <DynamicFooter />
        </ChakraProvider>
      </body>
    </html>
  );
}
