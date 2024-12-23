import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import toast from "react-hot-toast";

const AllProducts = () => {
  const { user } = useAuth();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://mobile-shop-server-weld.vercel.app/product/${user?.email}`
      );
      return res.data;
    },
  });
  const handleDelete = (id) => {
    fetch(`https://mobile-shop-server-weld.vercel.app/product/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.deletedCount) {
          refetch();
          toast.success(`Successfully Deleted!`);
        }
      });
  };

  return (
    <div>
      <SectionTitle header={"My Products"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead className="font-bold text-xl">
            <tr>
              <th>#</th>
              <th>Products Info</th>
              <th>Seller Info</th>
              <th>Price</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((eachProd, i) => (
              <tr key={eachProd._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={eachProd?.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{eachProd?.title}</div>
                      <div className="text-sm opacity-50">
                        Quantity:{eachProd?.quantity}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {eachProd?.sellerName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {eachProd?.sellerEmail}
                  </span>
                </td>
                <td className="text-right">{eachProd?.price}</td>

                <th>
                  <Link to={`/dashboard/updateProduct/${eachProd?._id}`}>
                    <button className="btn btn-ghost ">Update</button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(eachProd?._id)}
                    className="btn btn-ghost "
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
