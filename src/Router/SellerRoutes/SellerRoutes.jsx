import { Navigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { toast } from "react-hot-toast";
import useSeller from "../../hooks/useSeller";
import Loading from "../../Component/Loading/Loading";

// eslint-disable-next-line react/prop-types
const SellerRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isSeller, isSellerLoading] = useSeller();
 
  if (loading || isSellerLoading) {
  <Loading/>
  }
  if (user && isSeller) {
    return children;
  }else{
    toast.error("You Are Not Seller")
  }
  return <Navigate to="/" ></Navigate>;
};

export default SellerRoutes;
