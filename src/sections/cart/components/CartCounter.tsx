import { useAppDispatch } from "@/store/hooks";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { decreaseQuantity, increaseQuantity } from "../slice/cartSlice";

const CartCounter = ({ quantity, id }: { quantity: number; id: number }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "0.5rem",
      }}
    >
      <Button onClick={() => dispatch(increaseQuantity(id))}>+</Button>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        {quantity}
      </Typography>
      <Button onClick={() => dispatch(decreaseQuantity(id))}>-</Button>
    </Stack>
  );
};

export default CartCounter;
