"use client";
import React from "react";

import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { info } from "../constant";

const ProductInfo = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      {info.map((el) => (
        <Grid key={el.title} size={{xs: 12, md:4}}>
          <Stack
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {el.icon}
            <Typography variant="h6">{el.title}</Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.grey[500] }}
            >
              {el.description}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductInfo;
