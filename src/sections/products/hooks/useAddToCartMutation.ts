import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { addToCart } from "../api/addToCart";

export const useAddToCartMutation = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      router.refresh();
    },
  });
  return { mutation };
};
