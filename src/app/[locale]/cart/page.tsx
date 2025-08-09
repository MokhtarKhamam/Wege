import Cart from "@/sections/cart/components/Cart";
import { ProductCart } from "@/types/producte";
import React from "react";

const CartPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`);
  const products: ProductCart[] = (await data.json()) ?? [];

  return <Cart data={products} />;
};

export default CartPage;
