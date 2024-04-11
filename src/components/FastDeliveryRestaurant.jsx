import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const FastDeliveryRestaurant = () => {
  const fastDeliveryRest = useSelector(
    (store) => store?.data?.fastDeliveryRestaurants
  );
  return (
    <>
      {fastDeliveryRest &&
        fastDeliveryRest?.map((restaurant) => (
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

export default FastDeliveryRestaurant;
