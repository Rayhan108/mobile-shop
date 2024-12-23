import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://mobile-shop-server-weld.vercel.app/allProducts`
      );
      return res.data;
    },
  });
  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-100 border border-black p-4   rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Link to={`/single-product/${product?._id}`}>
              <div className="relative">
                <img
                  src={product.productImg}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            </Link>
            <h3 className="mt-4 text-lg font-semibold text-center">
              {product.title}
            </h3>
            <p className="text-gray-600 text-center">{product.category}</p>
            <p className="text-gray-900 font-bold text-center">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
