import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import FilterRestaurant from "../components/FilterRestaurant";
import ShimmerHome from "../components/ShimmerHome";
import { useFetchDataQuery } from "../utils/apiSlice";
import {
  addFastDeliveryRestaurants,
  addHighRatedItems,
  addPureVegRestaurants,
  setAllRestaurants,
  setBannerData,
} from "../utils/DataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const location = useSelector((store) => store.location.location);
  // console.log(location);
  const {
    data: responseData,
    isError,
    isLoading,
    isSuccess,
  } = useFetchDataQuery(location);

  const HighRatedRestaurant =
    responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const filteredRestaurant = HighRatedRestaurant?.filter(
    (res) => res?.info?.avgRating > 4.4
  );
  const pureVegRes = HighRatedRestaurant?.filter((res) => res?.info?.veg);
  const fastDeliveryRestaurant = HighRatedRestaurant?.filter(
    (res) => res?.info?.sla?.deliveryTime < 35
  );

  useEffect(() => {
    if (responseData) {
      dispatch(
        setBannerData(responseData?.data?.cards[0]?.card?.card?.imageGridCards)
      );
      dispatch(
        setAllRestaurants(
          responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        )
      );
      dispatch(addHighRatedItems(filteredRestaurant));
      dispatch(addPureVegRestaurants(pureVegRes));
      dispatch(addFastDeliveryRestaurants(fastDeliveryRestaurant));
    }
  }, [responseData]);

  return (
    <>
      <Hero />
      {isLoading && <ShimmerHome />}
      {isError && <h1>Something went wrong...</h1>}
      {isSuccess && <FilterRestaurant responseData={responseData} />}
    </>
  );
};

export default Home;
