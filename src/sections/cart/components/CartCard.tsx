import { ProductCart } from "@/types/producte";
import { useAppDispatch } from "@/store/hooks";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { removeProduct } from "../slice/cartSlice";
import CartCounter from "./CartCounter";

const CartCard = ({ data }: { data: ProductCart }) => {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeProduct(data.id));
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignContent="start"
      width="100%"
      borderBottom="1px solid #dddddd"
      py={2}
    >
      <Stack
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        gap={2}
      >
        <Box sx={{ position: "relative", height: "100%", width: "100px F" }}>
          <Image src="/images/image-1.jpg" alt="" width={128} height={160} />
        </Box>
        <Stack justifyContent="space-between" height="100%">
          <Typography variant="h6">{data.title}</Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Typography variant="subtitle1">Price: {data.price}$</Typography>
            <CartCounter quantity={data.quantity} id={data.id} />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" gap={1} alignContent="start" height="fit-content">
        <Button sx={{ height: "fit-content" }} onClick={handleRemoveProduct}>
          X
        </Button>
      </Stack>
    </Stack>
  );
};

export default CartCard;
