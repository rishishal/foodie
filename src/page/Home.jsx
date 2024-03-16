import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constans";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import RestaurantCard, { withFlatOffer } from "../components/RestaurantCard";

const Home = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(SWIGGY_API);
        const response = await res.json();
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching Swiggy data:", error);
      }
    };
    getData();
  }, []);

  const link = Data?.cards[0]?.card?.card?.imageGridCards.info;
  const restaurants =
    Data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const RestaurantCardOffer = withFlatOffer(RestaurantCard);
  return (
    <>
      <Hero />
      <Carousel links={link} />
      <div className='flex justify-between mt-10'>
        <h1 className=' text-2xl font-bold'>
          {Data?.cards[2].card.card.title}
        </h1>
      </div>
      <div className='flex flex-wrap mt-10'>
        {restaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardOffer resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
