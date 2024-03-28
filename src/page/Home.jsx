import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { useSelector, useDispatch } from "react-redux";
import Body from "../components/Body";
import ShimmerHome from "../components/ShimmerHome";
import { setCity } from "../utils/LocationSlice";

const Home = () => {
  const [Data, setData] = useState(null);
  const [filteredData, setfilteredData] = useState(null);

  const dispatch = useDispatch();
  const location = useSelector((store) => store.location.location);
  console.log(location);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}`
        );
        const response = await res.json();
        setData(response?.data);
        setfilteredData(response?.data);
        dispatch(
          setCity(
            response?.data?.cards[
              response?.data?.cards.length - 1
            ]?.card?.card?.citySlug?.toUpperCase() || ""
          )
        );
      } catch (error) {
        console.error("Error fetching Swiggy data:", error);
      }
    };
    getData();
  }, [location]);

  const link = Data?.cards[0]?.card?.card?.imageGridCards.info;
  const filterRestaurant =
    filteredData?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return (
    <>
      <Hero />
      {Data === null ? (
        <ShimmerHome />
      ) : (
        <Body link={link} filterRestaurant={filterRestaurant} Data={Data} />
      )}
    </>
  );
};

export default Home;
