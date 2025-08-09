"use client";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

const footerLinks = [
  { title: "product-1", links: ["link-1", "link-2", "link-3", "link-4"] },
  { title: "product-2", links: ["link-1", "link-2", "link-3", "link-4"] },
  { title: "product-3", links: ["link-1", "link-2", "link-3", "link-4"] },
  { title: "product-4", links: ["link-1", "link-2", "link-3", "link-4"] },
];

const FooetrLinks = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      {footerLinks.map((link) => (
        <Grid key={link.title} size={{ xs: 6, md: 3 }}>
          <Stack gap={2}>
            <Typography variant="h6">{link.title}</Typography>
            {link.links.map((el) => (
              <Link
                key={el}
                href="/"
                style={{ color: theme.palette.text.primary }}
              >
                {el}
              </Link>
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooetrLinks;
