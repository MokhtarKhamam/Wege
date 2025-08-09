import { request } from "@/config/api/axios";
import { Product } from "@/types/producte";

export const toggleFavorite = async (product: Product) => {
  const updatedProduct = {
    ...product,
    isFavorite: !product.isFavorite,
  };
  await request({
    method: "PATCH",
    url: `/products/${product.id}`,
    data: { isFavorite: updatedProduct.isFavorite },
  });

  if (!product.isFavorite) {
    await request({
      method: "POST",
      url: `/wishlist`,
      data: updatedProduct,
    });
  } else {
    await request({
      method: "DELETE",
      url: `/wishlist/${product.id}`,
    });
  }

  return updatedProduct;
};
