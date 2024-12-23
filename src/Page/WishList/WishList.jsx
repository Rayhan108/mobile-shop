import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const WishList = () => {
    const {user}=useAuth();

  const { data: cartItems = [] } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/wishList/${user?.email}`
      );
      return res.data;
    },
  });
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
        <div className="bg-white p-3 md:p-12 rounded-xl shadow-2xl overflow-hidden">
          <h2 className="text-3xl font-extrabold text-center mb-8">My Wish List</h2>
  
          {cartItems?.length === 0 ? (
            <p className="text-center text-xl text-gray-500">Your Wish List is empty.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse hidden sm:table">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left text-lg font-semibold">Product</th>
                    <th className="py-3 px-4 text-left text-lg font-semibold">Price</th>
  
                  
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100">
                      <td className="py-4 px-4 flex items-center space-x-4">
                        <img src={item.productImg} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                        <span>{item.title}</span>
                      </td>
                      <td className="py-4 px-4 text-lg font-semibold">${item.price}</td>
              
                   
                    </tr>
                  ))}
                </tbody>
              </table>
  
              {/* Mobile Responsive Section */}
              <div className="sm:hidden space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col bg-gray-100 p-4 rounded-lg shadow">
                    <div className="flex items-center space-x-4">
                      <img src={item.productImg} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-500">₺{item.price}</p>
                      </div>
                    </div>
               
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {/* Footer Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-3 p-3 space-y-4 sm:space-y-0">
            <Link
              to="/products"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Continue Shopping
            </Link>
     
          </div>
        </div>
      </div>
    );
};

export default WishList;