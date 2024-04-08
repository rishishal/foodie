import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import Body from "../components/Body";
import ShimmerHome from "../components/ShimmerHome";
import { useFetchDataQuery } from "../utils/apiSlice";
import { setFilterData, setList } from "../utils/DataSlice";

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

  useEffect(() => {
    if (responseData) {
      dispatch(setList(responseData?.data));
      dispatch(
        setFilterData(
          responseData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )
      );
    }
  }, [responseData]);

  const link = responseData?.data?.cards[0]?.card?.card?.imageGridCards.info;

  return (
    <>
      <Hero />
      {isLoading && <ShimmerHome />}
      {isError && <h1>Something went wrong...</h1>}
      {isSuccess && <Body link={link} responseData={responseData} />}
    </>
  );
};

export default Home;
