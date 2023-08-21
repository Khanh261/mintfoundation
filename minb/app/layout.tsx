"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import SlideSection from "@/components/SlideSection";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <TopHeader />
          <Navbar />
          <SlideSection />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
