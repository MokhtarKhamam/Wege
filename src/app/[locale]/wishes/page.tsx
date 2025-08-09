import ProductCard from "@/components/products/ProductCard";
import EmptyWishList from "@/sections/wishes/components/EmptyWishList";
import { Product } from "@/types/producte";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const WishesPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist`);
  const products: Product[] = (await data.json()) ?? [];

  if (!products.length) {
    return <EmptyWishList />;
  }
  return (
    <Stack gap={3}>
      <Typography variant="h6">Wishes</Typography>
      <Box
        sx={[
          {
            gap: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
          },
        ]}
      >
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </Box>
    </Stack>
  );
};

export default WishesPage;
