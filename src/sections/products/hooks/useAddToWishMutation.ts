import { useMutation } from "@tanstack/react-query";
import { toggleFavorite } from "../api/toggleFavorite";
import { useRouter } from "next/navigation";

export const useAddToWishMutation = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: toggleFavorite,
    onSuccess: () => {
      router.refresh();
    },
  });
  return {
    mutation,
  };
};
