import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <div className="flex mt-28 font-Raleway">
        <div className="text-left">
          <p className="text-lg font-semibold mb-5">
            Easy Way to order Your Food
          </p>
          <h1 className="font-extrabold text-6xl mb-5">
            Chossing <span className="text-[#F39A25]">Healthy</span> &{" "}
            <span className="text-[#F39A25]">Fresh</span> Food
          </h1>
          <p className="mb-10">
            We are most fastest and Favourite Food Delivery Services over the
            all over the world Search for your Favourite food or resturant in
            your area
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
            alt="hero"
          />
        </div>
      </div>
      <div className="text-left mt-10">
        <h1 className="text-2xl font-bold ">Whats on your mind?</h1>
      </div>

      <Carousel />
    </>
  );
};

export default Hero;
