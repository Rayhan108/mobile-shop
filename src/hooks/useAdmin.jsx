import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useAdmin = () => {
    const {user, loader} = useAuth();
  
   
    const {data: isAdmin,isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin,isLoading]
}
export default useAdmin;