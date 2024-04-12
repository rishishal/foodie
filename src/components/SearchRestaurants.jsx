import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { addRestaurants, clearRestaurants } from "../utils/searchResSlice";
import { SEARCH_RES_IMAGE } from "../utils/constans";

const SearchRestaurants = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const getSearchRestaurantData = useSelector((store) => store.searchRes);
  const location = useSelector((store) => store.location.location);

  useEffect(() => {
    getSearchRestaurant();

    return () => {
      dispatch(clearRestaurants());
    };
  }, []);

  const getSearchRestaurant = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${
        location.latitude
      }&lng=${location.longitude}&str= 
        ${searchParams.get("query")}
        &trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bd52aa24-315d-fdcb-661a-6eba3e1ad819&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22dyhqamt6bjfjwm4pkbat%22%2C%22dishFamilyId%22%3A%22846627%22%2C%22dishFamilyIds%22%3A%5B%22846627%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
    );
    const json = await data.json();
    const restauratsItems =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
    dispatch(addRestaurants(restauratsItems));
  };

  console.log(getSearchRestaurantData);
  //   if (getSearchRestaurantData === null) return <ShimmerUI />;

  return (
    <div className="flex flex-col">
      {getSearchRestaurantData?.map(
        (r, index) =>
          r?.card?.card?.info && (
            <Link
              to={"/restaurants/" + r?.card?.card?.restaurant?.info?.id}
              key={index}
            >
              <div className="w-72 md:w-96 h-64 m-auto mt-10 cursor-pointer border shadow-xl rounded-2xl">
                <div className="">
                  <h3 className="font-bold text-base">
                    {r?.card?.card?.restaurant?.info?.name}
                  </h3>
                  <img
                    className=""
                    src="https://www.reshot.com/preview-assets/icons/STPW6DFVRY/bold-right-arrow-STPW6DFVRY-b83b2.svg"
                    alt=""
                  />
                  <p>{r?.card?.card?.restaurant?.info?.avgRating}</p>
                  <p>{r?.card?.card?.restaurant?.info?.sla?.slaString}</p>
                </div>

                <div className=" flex justify-evenly">
                  <h3 className="font-bold text-base">
                    {r?.card?.card?.info?.name}
                  </h3>

                  <img
                    className="rounded-xl"
                    src={
                      r?.card?.card?.info?.imageId
                        ? SEARCH_RES_IMAGE + r?.card?.card?.info?.imageId
                        : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                    }
                    alt=""
                  ></img>
                </div>

                <div className="ml-4 mt-2 h-auto truncate text-ellipsis">
                  <p className="text-sm truncate text-ellipsis">
                    {r.card?.card?.info?.description}
                  </p>
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default SearchRestaurants;
