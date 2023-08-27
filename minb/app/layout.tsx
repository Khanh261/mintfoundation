"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import SlideSection from "@/components/SlideSection";
import ColorMode from "@/components/ColorMode";
import PriceService from "@/components/PriceService";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurServiceSection from "@/components/OurServiceSection";
import ProductSection from "@/components/ProductSection";
import FoundationSection from "@/components/FoundationSection";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallarySection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {/* <ColorMode /> */}
          <TopHeader />
          <Navbar />
          <SlideSection />
          <OurServiceSection />
          {/* <ProductSection /> */}
          <GallerySection />
          <PriceService />
          <BlogSection />
          <TestimonialsSection />
          <FoundationSection />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
