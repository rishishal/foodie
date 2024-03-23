import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constans";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import RestaurantCard from "../components/RestaurantCard";
import { Shimmer, ShimmerHeading, CircleShimmer } from "../components/Shimmer";

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
    Data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <>
      <Hero />
      {Data === null ? <CircleShimmer /> : <Carousel links={link} />}

      <div className='mt-10'>
        {Data === null ? (
          <ShimmerHeading />
        ) : (
          <h1 className=' text-2xl text-left font-bold font-Raleway'>
            {Data?.cards[2].card.card.title}
          </h1>
        )}
      </div>

      <div className='flex justify-center items-center flex-wrap mt-10'>
        {Data === null ? (
          <Shimmer />
        ) : (
          <>
            {restaurants?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant.info} />
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
