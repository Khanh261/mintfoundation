"use client";

import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  IconButton,
  Button,
  Center,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import ChangeLanguageButton from "../components/UI/ChangeLanguageButton";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: t("Home"),
      href: "#home",
      id: "home",
    },
    {
      label: t("About Us"),
      href: "#footer",
      id: "about-us",
    },
    {
      label: t("Albums"),
      href: "#albums",
      id: "albums",
    },
    {
      label: t("Services"),
      href: "#our-services",
      id: "",
    },
    {
      label: t("Blog"),
      href: "#blog",
      id: "blog",
    },
    {
      label: t("Founder"),
      href: "#foundation",
      id: "founder-message",
    },
  ];

  return (
    <Box>
      <Flex
        bg={"white"}
        color={"black"}
        minH={"93px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
        justifyContent={"center"}
        position="fixed"
        top="0"
        zIndex={1000}
        width={"100%"}
      >
        <IconButton
          color={"black"}
          icon={<HamburgerIcon />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
          display={{ base: "inline-flex", md: "none" }}
          onClick={onToggle}
          alignItems={"center"}
        />
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav navItems={NAV_ITEMS} />
        </Flex>

        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"teal.300"}
          borderRadius={"25px"}
          width={"max-content"}
          href={"#"}
          _hover={{
            bg: "gray.300",
          }}
          ml={1}
          display={{ base: "none", md: "inline-flex" }}
        >
          {t("Book Now")} {/* Use t() to translate */}
        </Button>
        <ChangeLanguageButton />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box position="fixed" top="93px" width="100%" zIndex={1000}>
          <MobileNav navItems={NAV_ITEMS} />
        </Box>
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ navItems }: { navItems: Array<NavItem> }) => {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Image src="/homepage/logo.jpg" w={20} alt="Description of image" />
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.href ? (
            <Link
              to={navItem.href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Text
                fontSize="lg"
                fontWeight="500"
                color="gray.600"
                _hover={{
                  backgroundColor: "teal.300",
                  color: "white",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                px={2}
                py={2}
              >
                {navItem.label}
              </Text>
            </Link>
          ) : (
            <Text fontSize="lg" fontWeight="500" color="gray.600">
              {navItem.label}
            </Text>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ navItems }: { navItems: Array<NavItem> }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <ChangeLanguageButton />
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.200");
  const { t } = useTranslation();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")!.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      {href ? (
        <a href={href} onClick={handleClick}>
          <Box
            py={2}
            justifyContent="space-between"
            alignItems="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text fontWeight={600} color={color}>
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition="all .25s ease-in-out"
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Box>
        </a>
      ) : (
        <Box
          py={2}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600} color={color}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Box>
      )}

      {children && isOpen && (
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={color}
          align="start"
        >
          {children.map((child) =>
            child.href ? (
              <a key={child.label} href={child.href} onClick={handleClick}>
                <Box py={2}>{child.label}</Box>
              </a>
            ) : (
              <Box key={child.label} py={2}>
                {child.label}
              </Box>
            )
          )}
        </Stack>
      )}
    </Stack>
  );
};

interface NavItem {
  id?: string;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
