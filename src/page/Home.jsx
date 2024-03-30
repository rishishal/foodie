import { useEffect } from "react";
import Hero from "../components/Hero";
import { useSelector, useDispatch } from "react-redux";
import Body from "../components/Body";
import ShimmerHome from "../components/ShimmerHome";
import { fetchData } from "../utils/DataSlice";

const Home = () => {
  const Data = useSelector((store) => store.data.data);
  const dispatch = useDispatch();
  const location = useSelector((store) => store.location.location);
  // console.log(location);

  useEffect(() => {
    dispatch(fetchData(location));
  }, [dispatch, location]);

  const link = Data?.cards[0]?.card?.card?.imageGridCards.info;

  return (
    <>
      <Hero />
      {Data === null ? <ShimmerHome /> : <Body link={link} Data={Data} />}
    </>
  );
};

export default Home;
