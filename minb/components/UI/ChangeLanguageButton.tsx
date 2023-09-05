import { Button, ButtonProps, Img, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";

const StyledButton = chakra(Button, {
  baseStyle: {
    w: "fit-content",
    h: "50px",
    display: "flex",
    alignItems: "center",
    px: "10px",
    borderRadius: "30px",
    fontSize: {
      base: "12px",
      md: "16px",
    },
    background: "rgba(255, 255, 255, 0.05)",
    lineHeight: "14px",
    color: "#A0A0A0",
    _hover: {
      color: "#fff",
      filter: "brightness(1.4)",
    },
  },
});

interface ChangeLanguageButtonProps extends ButtonProps {}
const ChangeLanguageButton = (props: ChangeLanguageButtonProps) => {
  const { i18n } = useTranslation();
  console.log("got error " + JSON.stringify(i18n));

  const [language, setLanguage] = useState<string>(i18n.language);

  const changeLanguage = () => {
    const lang = language === "en" ? "vi" : "en";

    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <StyledButton
      {...props}
      leftIcon={<Img src={`/icons/${language}.svg`} />}
      color={"#A0A0A0"}
      alignItems={"center"}
      onClick={changeLanguage}
    >
      {language === "en" ? LANGUAGES.ENGLISH : LANGUAGES.VIETNAMESE}
      {/* <Img src={"/icons/dropdown.svg"} p={"2.5px 0 0 8px"} /> */}
    </StyledButton>
  );
};

export default ChangeLanguageButton;
