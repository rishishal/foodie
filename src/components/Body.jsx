import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";
import Noresults from "../assets/no-results.png";

const Body = ({ link, filterRestaurant, Data }) => {
  return (
    <>
      <div className="text-left mt-10">
        <h1 className="text-2xl font-bold ">Whats on your mind?</h1>
      </div>

      <Carousel links={link} />

      <div className="mt-10">
        <h1 className=" text-2xl text-left font-bold font-Raleway">
          {Data?.cards[2].card.card.title}
        </h1>
      </div>

      {filterRestaurant.length === 0 ? (
        <div className="no-results-found">
          <img src={Noresults} alt="des" />
        </div>
      ) : (
        <div className="flex items-center gap-4 flex-wrap mt-10">
          {filterRestaurant?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
