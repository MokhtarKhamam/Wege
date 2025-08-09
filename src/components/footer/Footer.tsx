"use client";
import React from "react";
import { Container, Stack, useColorScheme, useTheme } from "@mui/material";
import FooterSocial from "./FooterSocial";
import FooetrLinks from "./FooetrLinks";

const Footer = () => {
  const theme = useTheme();
  const { mode } = useColorScheme();

  console.log(theme.palette.background.default)
  return (
    <Stack
      color="primary"
      sx={{
        backgroundColor:
          mode === "light"
            ? theme.palette.primary.main
            : "#323232",
        color: "white",
        mt: "auto",
      }}
    >
      <Container>
        <FooterSocial />
        <FooetrLinks />
      </Container>
    </Stack>
  );
};

export default Footer;
