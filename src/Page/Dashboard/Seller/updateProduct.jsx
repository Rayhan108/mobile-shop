import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const UpdateProduct = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://mobile-shop-server-weld.vercel.app/single-product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,

    reset,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard/myProducts";
  const onSubmit = (data) => {
    const price = Number(data.price);
    data.price = price;
    const quantity = Number(data.quantity);
    data.quantity = quantity;

    // console.log(data);
    fetch(`https://mobile-shop-server-weld.vercel.app/updateProduct/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          navigate(from, { replace: true });
          toast.success("update succesfull");
        }
      });
  };

  return (
    <div className="flex space-y-10  items-center justify-center min-h-screen bg-gray-100 mb-5 mt-5">
      <div className=" w-1/2 px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Add New Class
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title <span className="text-warning">*</span>
            </label>
            <input
              type="text"
              defaultValue={singleProduct?.title}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Image<span className="text-warning">*</span>
            </label>
            <input
              type="url"
              readOnly
              defaultValue={singleProduct?.productImg}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              defaultValue={singleProduct?.quantity}
              {...register("quantity", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.quantity && (
              <span className="text-red-600"> Quantity is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              defaultValue={singleProduct?.price}
              {...register("price", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.price && (
              <span className="text-red-600"> Price is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600  "
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
