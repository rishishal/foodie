import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const PureVegRestaurants = () => {
  const PureVeg = useSelector((store) => store?.data?.pureVegRestaurants);
  return (
    <>
      {PureVeg &&
        PureVeg?.map((restaurant) => (
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

export default PureVegRestaurants;
