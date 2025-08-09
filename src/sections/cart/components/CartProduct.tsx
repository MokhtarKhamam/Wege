"use client"
import { Stack, Typography } from "@mui/material";
import React from "react";
import CartCard from "./CartCard";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "react-i18next";

const CartProduct = () => {
  const {t} = useTranslation()
  const { cart } = useAppSelector((state) => state);
  return (
    <Stack gap={3}>
      <Typography>{t("myCart")}</Typography>
      <Stack gap={2}>
        {cart.items.map((el) => (
          <CartCard key={el.id} data={el} />
        ))}
      </Stack>
    </Stack>
  );
};

export default CartProduct;
