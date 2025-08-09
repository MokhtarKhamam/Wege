import { request } from "@/config/api/axios";
import { Product, ProductCart } from "@/types/producte";

export const updateCart = async (newCartList: ProductCart[]) => {
  const currentCartResponse: { data: Product[] } = await request({
    method: "GET",
    url: `/cart`,
  });

  const newProductIds = newCartList.map((item) => item.id);

  const currentCartItems = currentCartResponse.data;

  const productsToUpdate = currentCartItems.filter(
    (item) => !newProductIds.includes(item.id)
  );

  const updatePromises = productsToUpdate.map((product) =>
    request({
      method: "PATCH",
      url: `/products/${product.id}`,
      data: { isInCart: false },
    })
  );

  await Promise.all(updatePromises);

  const deletePromises = currentCartItems.map((item) =>
    request({
      method: "DELETE",
      url: `/cart/${item.id}`,
    })
  );

  await Promise.all(deletePromises);

  const updatedProducts = newCartList.map((item) => ({
    ...item,
    isInCart: true,
    quantity: item.quantity ?? 1,
  }));

  const addPromises = updatedProducts.map((product) =>
    request({
      method: "POST",
      url: `/cart`,
      data: product,
    })
  );

  await Promise.all(addPromises);

  return updatedProducts;
};
