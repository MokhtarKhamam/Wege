"use client";
import { useAppSelector } from "@/store/hooks";
import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useUpdateCartMutation } from "../hooks/useUpdateCartMutation";
import { useTranslation } from "react-i18next";

const CartSummary = () => {
  const { t } = useTranslation();
  const { total, items } = useAppSelector((state) => state.cart);
  const { mutation: cartMutation } = useUpdateCartMutation();

  const handleUpdateCart = () => {
    cartMutation.mutate(items);
  };

  return (
    <Paper sx={{ padding: 2, borderRadius: "1rem", width: "100%" }}>
      <Stack gap={2}>
        <Typography>{t("summary")}</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">{t("subtotal")}</Typography>
          <Typography variant="h6" fontWeight="bold">
            {total}
          </Typography>
        </Stack>
        <Button variant="contained" onClick={handleUpdateCart}>
          {t("save")}
        </Button>
        <Button>{t("emptyCart")}</Button>
      </Stack>
    </Paper>
  );
};

export default CartSummary;
