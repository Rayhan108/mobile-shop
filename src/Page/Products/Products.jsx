import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";


const Products = () => {
    const {setLoader}=useAuth();
    const [products, setProducts] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [brandFilter, setBrandFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
  
    useEffect(() => {
        setLoader(true);
        const fetch =async()=>{
            axios.get(`http://localhost:5000/allProducts?title=${searchTerm}&sort=${sortOrder}&brand=${brandFilter}&category=${categoryFilter}`)
            .then((res)=>{
                setProducts(res?.data)
                setLoader(false)
            })
        }
        fetch();
 
    }, [searchTerm,sortOrder,brandFilter,categoryFilter]);
  
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 bg-white shadow-md">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:border-blue-500"
          />
  
          <label className="block mb-2 font-medium">Category</label>
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-6"
          >
            <option value="">All</option>
            <option value="mobile">Mobile</option>
            <option value="tab">Tablet</option>
            
          </select>
  
          <label className="block mb-2 font-medium">Brand</label>
          <select
            onChange={(e) => setBrandFilter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="samsung">Samsung</option>
              <option value="apple">Apple</option>
              <option value="vivo">Vivo</option>
              <option value="oppo">Oppo</option>
              <option value="pixel">Pixel</option>
          </select>
        </aside>
  
        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <div key={product._id} className="bg-gray-100 border border-black p-4   rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Link to={`/single-product/${product?._id}`}>
        <div className="relative">
          <img
            src={product.productImg}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </Link>
      <h3 className="mt-4 text-lg font-semibold text-center">{product.title}</h3>
      <p className="text-gray-600 text-center">{product.category}</p>
      <p className="text-gray-900 font-bold text-center">${product.price}</p>

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Add to Cart
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  ))}
</div>


        </main>
      </div>
    );
};

export default Products;