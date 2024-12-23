import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData()
    const {title,productImg,brand,price,quantity,description,category}=product;
    return (
      <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-12 px-6 sm:px-12 lg:px-24">
        <div className=" mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative w-full h-[500px]">
            <img
              src={productImg}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-5xl sm:text-7xl font-extrabold text-white text-center drop-shadow-xl">
                {product.title}
              </h1>
            </div>
          </div>
  
          <div className="p-8 sm:p-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
              {title}
            </h2>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
              {brand}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              {description}
            </p>
  

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-semibold">Price</h3>
                <p className="text-gray-600 mt-2">₺{price}</p>
              
              </div>
              <div>
              <h3 className="text-2xl font-semibold">Quantity</h3>
              <p className="text-gray-600 mt-2">{quantity}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Category</h3>
                <p className="text-gray-600 mt-2">{category}</p>
              </div>
            </div>
            <div className="sm:col-span-4 text-center mt-8 flex justify-center gap-4">
  <button
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition duration-300"
  >
    Add to Cart
  </button>
  <button
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg transition duration-300"
  >
    Add to Wishlist
  </button>
</div>

            </div>
          </div>
        </div>
  
    );
  };
  
  export default ProductDetails;
  