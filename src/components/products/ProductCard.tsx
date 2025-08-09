"use client";
import {
  Card,
  CardContent,
  Fab,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product } from "../../types/producte";
import Image from "next/image";
import ColorPerview from "./ColorPerview";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAddToWishMutation } from "@/sections/products/hooks/useAddToWishMutation";
import { useAddToCartMutation } from "@/sections/products/hooks/useAddToCartMutation";
import Link from "next/link";

const ProductCard = ({ data }: { data: Product }) => {
  const { mutation: favoriteMutation } = useAddToWishMutation();
  const { mutation: cartMutation } = useAddToCartMutation();

  const [isHovered, setIsHovered] = useState(false);

  const handleAddCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    cartMutation.mutate(data);
  };

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    favoriteMutation.mutate(data);
  };

  const [isFavorite, setIsFavorite] = useState(data.isFavorite);

  return (
    <Card>
      <div
        style={{
          width: "100%",
          height: "300px",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src={data.images?.[0]}
            alt={data.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: isHovered ? "0" : "1" }}
          />
          {data.images[1] && (
            <Image
              src={data.images[1]}
              alt={data.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", opacity: isHovered ? "1" : "0" }}
            />
          )}
        </div>
        <Fab
          size="medium"
          color="warning"
          onClick={handleAddCart}
          disabled={data.isInCart}
          sx={[
            (theme) => ({
              right: 16,
              zIndex: 9,
              bottom: 16,
              opacity: isHovered ? 1 : 0,
              position: "absolute",
              transform: `${isHovered ? "scale(1)" : "scale(0)"}  `,
              transition: theme.transitions.create(["opacity", "transform"], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
            }),
          ]}
        >
          <AddShoppingCartIcon />
        </Fab>
      </div>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href={`/products/${data.id}`}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{ color: "text.secondary" }}
            >
              {data.title}
            </Typography>
          </Link>

          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ color: "text.secondary" }}
          >
            {data.price}$
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton aria-label="add to favorites" onClick={handleFavorite}>
            <FavoriteIcon sx={{ fill: isFavorite ? "red" : "" }} />
          </IconButton>
          <ColorPerview colors={data.colors} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
