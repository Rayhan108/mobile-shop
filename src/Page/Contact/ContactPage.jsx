const ContactPage = () => {
    return (
      <div className="bg-white min-h-screen py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-gray-50 border border-black rounded-xl shadow-2xl overflow-hidden">
          <div >
            <img
              src="https://i.ibb.co.com/fxzjhn1/Next-Gen-Phones-1.png"
              alt="Contact Us"
              className="w-full h-full   object-cover"
            />
         
          </div>
  
          <div className="p-8 sm:p-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              We&apos;d love to hear from you! Reach out to us for inquiries, feedback, or support. Our team is here to help.
            </p>
  
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Write your name"
                  className="border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
  
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="somthing@example.com"
                  className="border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
  
              <div className="flex flex-col sm:col-span-2">
                <label className="text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="6"
                  placeholder="Your message..."
                  className="border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
  
              <div className="sm:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
  
            <div className="mt-20 flex flex-col sm:flex-row sm:justify-around text-center">
              <div className="mb-12 sm:mb-0">
                <h3 className="text-2xl font-semibold">Call Us</h3>
                <p className="text-gray-600 mt-2">+099-123-456</p>
              </div>
              <div className="mb-12 sm:mb-0">
                <h3 className="text-2xl font-semibold">Email</h3>
                <p className="text-gray-600 mt-2">support@nextgenphones.com</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Visit Us</h3>
                <p className="text-gray-600 mt-2">Shamoly,2/A,Dhaka 1200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  