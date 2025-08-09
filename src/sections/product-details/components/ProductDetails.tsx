"use client";
import {
  ButtonCart,
  ColorRoot,
  Colors,
  InStock,
  New,
} from "@/components/ui/product-details";
import { Product } from "@/types/producte";
import { Button, Rating, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAddToCartMutation } from "@/sections/products/hooks/useAddToCartMutation";

const ProductDetails = ({ data }: { data: Product }) => {
  const theme = useTheme();
  const [value, setValue] = useState<number | null>(2);
  const { mutation: cartMutation } = useAddToCartMutation();

  const handleAddCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    cartMutation.mutate(data);
  };

  return (
    <Stack gap={2}>
      <New>New</New>
      <InStock>In Stock</InStock>
      <Typography fontWeight={600} textTransform="capitalize">
        {data.title}
      </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography fontWeight={600} textTransform="capitalize">
        {data.price} $
      </Typography>
      <Typography
        textTransform="capitalize"
        sx={{ color: theme.palette.grey[500] }}
      >
        {data.description}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Color</Typography>
        <ColorRoot>
          {data.colors.map((color, index: number) => (
            <Colors key={color + index} color={color}></Colors>
          ))}
        </ColorRoot>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          onClick={handleAddCart}
          disabled={data.isInCart}
        >
          <AddShoppingCartIcon sx={{ width: "20px", height: "20px" }} />
          Add to cart
        </Button>
        <ButtonCart variant="contained">Buy now</ButtonCart>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
