import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MEDIA_ASSETS } from "../utils/constans";

const Carousel = ({ links }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    className: "react__slick__slider__parent",
  };
  return (
    <>
      <div className='flex justify-between mt-10'>
        <div>
          <h1 className='text-2xl font-bold '>Whats on your mind?</h1>
        </div>
        <div>Carousel</div>
      </div>
      <div className='mt-5'>
        <Slider {...settings}>
          {links?.map((bannerImg) => (
            <img
              key={bannerImg?.id}
              src={MEDIA_ASSETS + bannerImg?.imageId}
              alt='IMG'
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
