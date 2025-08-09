import { request } from "@/config/api/axios";
import { Product } from "@/types/producte";

export const addToCart = async (product: Product) => {
  const updatedProduct = {
    ...product,
    isInCart: !product.isInCart,
    quantity: 1,
  };
  await request({
    method: "PATCH",
    url: `/products/${product.id}`,
    data: { isInCart: updatedProduct.isInCart },
  });

  await request({
    method: "POST",
    url: `/cart`,
    data: updatedProduct,
  });

  return updatedProduct;
};
