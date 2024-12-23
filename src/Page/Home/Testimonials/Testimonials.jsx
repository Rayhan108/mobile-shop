
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO of Company",
      quote: "This product has revolutionized the way we work. Highly recommended!",
     
details:"This is by far the best service I have ever used. The customer support…"
    },
    {
      name: "Jane Smith",
      title: "Marketing Director",
      quote: "An outstanding experience from start to finish. Truly exceptional.",

    },
    {
      name: "Michael Lee",
      title: "Product Manager",
      quote: "I’ve never seen such great quality in a product. Worth every penny!",
     
    },
    {
      name: "Sarah Brown",
      title: "Creative Director",
      quote: "A game-changer! I am really impressed with the results.",
    
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>
      <div className="main-slider">
        
      <Swiper navigation={true} autoplay modules={[Navigation,Autoplay]} className="mySwiper">
           {
            testimonials.map(testimonial=><SwiperSlide key={testimonial?._id}>
                <div className="flex flex-col items-center p-8 md:p-16 md:space-y-7">
                   
                 <Rating style={{ maxWidth: 200 }} value={testimonial?.rating} readOnly />
                <RiDoubleQuotesL size={80}/>
                    <p className="font-mono ">{testimonial?.quote}</p>
                    <p className="text-2xl text-amber-500 font-mono">{testimonial?.name}</p>
                </div>
            </SwiperSlide>)}
            </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
