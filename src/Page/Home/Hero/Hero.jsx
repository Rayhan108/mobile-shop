import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co.com/2Z6SLPP/Blue-Purple-Modern-Gradient-We-re-Launching-Exclusive-Phone-Banner-1.webp)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-12 py-16 md:py-32 text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
          Discover the Future of Mobile Technology
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Stay ahead with the latest in mobile innovation. Explore top devices and more at unbeatable prices.
        </p>
        <Link
          to="/products"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
