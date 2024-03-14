import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";
import { MEDIA_ASSETS } from "../utils/constans";

const Home = ({ Data }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <CircleArrowRight />,
    prevArrow: <CircleArrowLeft />,
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
      <Slider {...settings}>
        {Data?.cards[0]?.card?.card?.imageGridCards.info.map((bannerImg) => (
          <img
            key={bannerImg?.id}
            src={MEDIA_ASSETS + bannerImg?.imageId}
            alt='IMG'
          />
        ))}
      </Slider>
    </>
  );
};

export default Home;
