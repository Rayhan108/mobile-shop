import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useSeller = () => {
  const { user, loader } = useAuth();
  const { data: isSeller, isSellerLoading } = useQuery({
    queryKey: ["isSeller", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axios.get(
        `https://mobile-shop-server-weld.vercel.app/seller/${user?.email}`
      );
      return res.data.seller;
    },
  });
  return [isSeller, isSellerLoading];
};

export default useSeller;
