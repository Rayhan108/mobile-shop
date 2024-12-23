const About = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-gray-50 border border-black rounded-xl shadow-2xl overflow-hidden">
        <div>
          <img
            src="https://i.ibb.co.com/2Z6SLPP/Blue-Purple-Modern-Gradient-We-re-Launching-Exclusive-Phone-Banner-1.webp"
            alt="About Us"
            className="w-full h-full  object-cover"
          />
        </div>

        <div className="p-8 sm:p-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
            NextGen Phones is your go-to source for the latest smartphone
            technology. We bridge the gap between innovation and accessibility,
            bringing you high-performance devices that align with your
            lifestyle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7074.jpg?t=st=1734947747~exp=1734951347~hmac=b1aa6257a1f06a7976ab33cf6407b0eb6a5de1da8722f989322a10279024c012&w=996"
                  alt="Innovation"
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6">
                Innovation at Core
              </h3>
              <p className="text-gray-600 mt-3 max-w-xs">
                Pioneering the latest trends in smartphone technology to keep
                you ahead of the curve.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367139.jpg?t=st=1734947296~exp=1734950896~hmac=405b6b9206235b56d5b5c20d110916d64d68c8f5bab8289bc95cdf6abcb87156&w=996"
                  alt="Customer Focus"
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6">Customer Centric</h3>
              <p className="text-gray-600 mt-3 max-w-xs">
                Delivering unparalleled service and quality to ensure customer
                satisfaction at every step.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/cup-coffee-mobile-with-headphones_1122-1213.jpg?t=st=1734947664~exp=1734951264~hmac=02f434db8a9f425796320e6a3a25660afc57498489452e5a56dc821c851f8fbd&w=996"
                  alt="Sustainability"
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6">Sustainability</h3>
              <p className="text-gray-600 mt-3 max-w-xs">
                Embracing eco-friendly practices to ensure a greener, more
                sustainable future.
              </p>
            </div>
          </div>

          <div className="mt-28">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
              To empower individuals by making the latest smartphone technology
              more accessible and affordable. We believe in inspiring progress
              through seamless connectivity and next-level performance.
            </p>
          </div>

          <div className="mt-24">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-16">
              <div className="text-center sm:w-1/3 mb-12 sm:mb-0">
                <h3 className="text-2xl font-semibold">Top-Notch Quality</h3>
                <p className="text-gray-600 mt-3">
                  Only the best, rigorously tested products that stand the test
                  of time.
                </p>
              </div>
              <div className="text-center sm:w-1/3 mb-12 sm:mb-0">
                <h3 className="text-2xl font-semibold">Best Prices</h3>
                <p className="text-gray-600 mt-3">
                  Competitive pricing that allows you to enjoy premium products
                  at affordable rates.
                </p>
              </div>
              <div className="text-center sm:w-1/3">
                <h3 className="text-2xl font-semibold">Dedicated Support</h3>
                <p className="text-gray-600 mt-3">
                  Our team is ready to assist you pre and post-purchase,
                  ensuring a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
