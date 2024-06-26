import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MEDIA_ASSETS } from "../utils/constans";
import { useSelector } from "react-redux";

const Carousel = () => {
  const BannerData = useSelector((store) => store?.data?.BannerData?.info);
  if (BannerData === null) return;

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
      <div className="mt-5">
        <Slider {...settings}>
          {BannerData?.map((bannerImg) => (
            <img
              key={bannerImg?.id}
              src={MEDIA_ASSETS + bannerImg?.imageId}
              alt="IMG"
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
