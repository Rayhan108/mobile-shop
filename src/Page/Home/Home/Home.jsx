import Categories from "../Categories/Categories";
import FAQ from "../FAQ/FAQ";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
          <Hero/>
          <FeaturedProducts/>
          <Testimonials/>
          <Categories/>
          <FAQ/>
        </div>
    );
};

export default Home;