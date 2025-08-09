import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/producte";
import { Box, Stack, Typography } from "@mui/material";
import initTranslations from "../i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { t } = await initTranslations((await params).locale, ["home"]);

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
  const products: Product[] = (await data.json()) ?? [];

  return (
    <>
      <Stack>
        <Typography variant="h5" fontWeight="bold">
          {t("Products")}
        </Typography>
      </Stack>
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
    </>
  );
}
