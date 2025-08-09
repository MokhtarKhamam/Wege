import ProductDetails from "@/sections/product-details/components/ProductDetails";
import ProductInfo from "@/sections/product-details/components/ProductInfo";
import ProductSlider from "@/sections/product-details/components/ProductSlider";
import { Product } from "@/types/producte";
import { Grid, Stack } from "@mui/material";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
  );
  const products: Product = (await data.json()) ?? [];
  return (
    <Stack gap={3}>
      <Grid container spacing={3}>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: "100%" }}>
          <ProductSlider data={products} />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} sx={{ width: "100%" }}>
          <ProductDetails data={products} />
        </Grid>
      </Grid>
      <ProductInfo />
    </Stack>
  );
};

export default ProductDetailsPage;
