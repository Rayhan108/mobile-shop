import { useQuery } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import ManageUsersTable from "./ManageUsersTable";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";


const ManageUsers = () => {
    const {loader}=useAuth();
    const { data: allUsers = [], refetch } = useQuery({

        queryKey: ['allUser'],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allUsers`);
            return res.data;
        }
    });

    //   make admin
      const handleMakeAdmin = (user) => {
        const token = localStorage.getItem("access-token");
        // axios.patch(`http://localhost:5000/admin/${user._id}`,{
        //     headers:{
        //         authorization: `Bearer ${token}`
        //     }
        // })
        fetch(
            `http://localhost:5000/admin/${user._id}`,
            {
              method: "PATCH",
            },{
                headers:{
                    authorization:`Bearer ${token}`
                }
            }
          )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount) {
            refetch();
             
            toast.success(`${user.name} is an Admin Now!`)
          }
        }); 
    
        
      };
    //   make seller
    const handlemakeSeller =(user)=>{
        // const token = localStorage.getItem("access-token");
        // console.log(token);
        // axios.patch(`http://localhost:5000/seller/${user._id}`,{
        //     headers:{
        //         Authorization: `Bearer ${token}`
        //     }
        // })  
        fetch( `http://localhost:5000/seller/${user._id}`,{
            method:"PATCH",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                toast.success(`${user.name} is an Seller Now!`)
            }
        })
      
      
    }

    return (
        <div className="container mx-auto px-4">
        <h1 className="text-2xl text-center mb-5 font-bold">
            ALL USERS : {allUsers.length}
        </h1>
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                {/* head */}
                <thead className="bg-gray-200 text-lg font-semibold">
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Photo</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Instructor</th>
                        <th className="px-4 py-2">Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user, idx) => <ManageUsersTable key={user?._id} user={user} idx={idx} handleMakeAdmin={handleMakeAdmin} handlemakeSeller={handlemakeSeller}></ManageUsersTable>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;
