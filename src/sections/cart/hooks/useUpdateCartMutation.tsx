import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { updateCart } from "../api/updateCart";

export const useUpdateCartMutation = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      router.refresh();
    },
  });
  return { mutation };
};
