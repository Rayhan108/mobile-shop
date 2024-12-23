import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
  const { user, loader } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.quantity = Number(data.quantity);

    fetch("https://mobile-shop-server-weld.vercel.app/seller/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          toast.success("New Product Added");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-gray-100 border border-black p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && (
              <span className="text-red-600 text-sm">Title is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              {...register("productImg", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Category</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
              </select>
              {errors.category && (
                <span className="text-red-600 text-sm">
                  Category is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand <span className="text-red-500">*</span>
              </label>
              <select
                {...register("brand", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Brand</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="vivo">Vivo</option>
                <option value="oppo">Oppo</option>
                <option value="pixel">Pixel</option>
              </select>
              {errors.brand && (
                <span className="text-red-600 text-sm">Brand is required</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Seller Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              {...register("sellerEmail", { required: true })}
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("quantity", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="w-full h-40 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex justify-center items-center"
          >
            {loader ? (
              <ImSpinner9 className="animate-spin" size={24} />
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
