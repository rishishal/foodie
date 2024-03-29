import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";
import Noresults from "../assets/no-results.png";
import { useSelector } from "react-redux";
import ShowMoreBtn from "./ShowMoreBtn";
import { useState } from "react";

const Body = ({ link, Data }) => {
  const [showBtn, setShowBtn] = useState(true);
  const filteredData = useSelector((store) => store.data.filteredData);
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

      {filteredData.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-12">
          <h1 className="font-Raleway font-bold text-3xl tracking-widest text-blue-500">
            Result Not Found
          </h1>
          <img className="w-80 h-80" src={Noresults} alt="des" />
        </div>
      ) : (
        <div className="flex items-center gap-4 flex-wrap mt-10">
          {filteredData?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
      {showBtn && <ShowMoreBtn setShowBtn={setShowBtn} />}
    </>
  );
};

export default Body;
