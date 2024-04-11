import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";

const Allrestaurants = () => {
  const AllRestaurants = useSelector(
    (store) => store?.data?.restaurants?.restaurants
  );
  //console.log(AllRestaurants);
  return (
    <>
      {AllRestaurants &&
        AllRestaurants?.map((restaurant) => (
          <Link
            className="w-96 h-[400px] mb-5 md:ml-3.5 "
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
    </>
  );
};

export default Allrestaurants;
