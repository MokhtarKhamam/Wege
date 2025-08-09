"use client";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import { ProductCart } from "@/types/producte";
import { initiatCart } from "../slice/cartSlice";
import { useAppDispatch } from "@/store/hooks";

const Cart = ({ data }: { data: ProductCart[] }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data.length) {
      dispatch(initiatCart(data));
    }
  }, [data]);

  return (
    <Grid container spacing={3}>
      <Grid size={{ sm: 12, md: 8 }}>
        <CartProduct />
      </Grid>
      <Grid size={{ sm: 12, md: 4 }} sx={{ width: "100%" }}>
        <CartSummary />
      </Grid>
    </Grid>
  );
};

export default Cart;
