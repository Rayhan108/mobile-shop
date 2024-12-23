/* eslint-disable react/prop-types */


const ManageUsersTable = ({user,idx,handleMakeAdmin,handlemakeSeller,handleDelete}) => {
    //  console.log(user);
    
        return (
           
            <tr className="text-sm md:text-base lg:text-lg">
            <th className="px-2 py-1 sm:px-4 sm:py-2">{idx + 1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                    <img
                      src={user.photo}
                      alt="User Avatar"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td className="px-2 py-1 sm:px-4 sm:py-2">{user.name}</td>
            <td className="px-2 py-1 sm:px-4 sm:py-2">{user.email}</td>
            <td className="px-2 py-1 sm:px-4 sm:py-2">
              <button
                disabled={user.role === "seller" ||user?.role === "admin"}
                onClick={() => handlemakeSeller(user)}
                className="btn btn-sm md:btn-md "
              >
                Make Seller
              </button>
            </td>
            <td className="px-2 py-1 sm:px-4 sm:py-2">
              <button
                disabled={user.role === "admin"}
                onClick={() => handleMakeAdmin(user)}
                className="btn btn-sm md:btn-md "
              >
                Make Admin
              </button>
            </td>
            <td className="px-2 py-1 sm:px-4 sm:py-2">
              <button
                
                onClick={() => handleDelete(user)}
                className="btn btn-sm md:btn-md "
              >
               Delete
              </button>
            </td>
          </tr>
            
        );
    };
    
    export default ManageUsersTable;