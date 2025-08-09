import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyWishList = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Image src="/empty-wish-list.png" alt="" width={120} height={120} />
      <p>You have no wishes product!!</p>
      <Link href="/" style={{textDecoration: "underline"}}>Start Adding Some </Link>
    </Box>
  );
};

export default EmptyWishList;
