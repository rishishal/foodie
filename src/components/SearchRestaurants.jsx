import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { addRestaurants, clearRestaurants } from "../utils/searchResSlice";
import { SEARCH_RES_IMAGE } from "../utils/constans";
import { useGetSearchRestaurantQuery } from "../utils/SearchApi";
import { FaArrowRightLong, FaRegSquareCaretUp } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { FaRegStopCircle } from "react-icons/fa";

const SearchRestaurants = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const getSearchRestaurantData = useSelector((store) => store.searchRes);
  const location = useSelector((store) => store.location.location);

  const {
    data: searchData,
    isError,
    isLoading,
  } = useGetSearchRestaurantQuery({
    latitude: location.latitude,
    longitude: location.longitude,
    query: searchParams.get("query"),
  });
  useEffect(() => {
    if (searchData) {
      dispatch(
        addRestaurants(
          searchData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards
        )
      );
    } else {
      return () => {
        dispatch(clearRestaurants());
      };
    }
  }, [dispatch, searchData]);
  //console.log(getSearchRestaurantData);

  //   if (getSearchRestaurantData === null) return <ShimmerUI />;

  return (
    <div className="mx-auto mt-5 md:flex flex-wrap md:justify-between font-Mulish">
      {getSearchRestaurantData?.map(
        (r, index) =>
          r?.card?.card?.info && (
            <Link
              to={"/restaurants/" + r?.card?.card?.restaurant?.info?.id}
              key={index}
            >
              <div className="w-80 mt-10 shadow-xl rounded-2xl">
                <div className="flex justify-between">
                  <div className="text-left">
                    <p className="text-sm font-bold">
                      {r?.card?.card?.restaurant?.info?.name}
                    </p>
                    <div className="flex items-center text-xs">
                      <span>
                        <IoMdStar className="w-4 h-4" />
                      </span>
                      <span className="mr-2">
                        {r?.card?.card?.restaurant?.info?.avgRating}
                      </span>
                      <span>
                        {r?.card?.card?.restaurant?.info?.sla?.slaString}
                      </span>
                    </div>
                  </div>
                  <div>
                    <FaArrowRightLong />
                  </div>
                </div>
                <div className="mt-1.5 border-b-2	border-dashed"></div>

                <div className=" flex justify-between mt-3 mx-2">
                  <div className="text-left text-sm">
                    <div className="flex items-center">
                      {r?.card?.card?.info?.isVeg === 1 ? (
                        <FaRegStopCircle className="text-green-700 w-4 h-4" />
                      ) : (
                        <FaRegSquareCaretUp className="text-red-700 w-4 h-4" />
                      )}
                      <div className="flex">
                        {r.card.card.info.ribbon.text &&
                        r.card.card.restaurant.info.promoted ? (
                          <>
                            <IoMdStar className="w-5 h-5 ml-1 text-yellow-500" />
                            <p className="text-yellow-500 font-bold">
                              {r?.card?.card?.info?.ribbon?.text}
                            </p>
                          </>
                        ) : r.card.card.restaurant.info.promoted ? ( //  This comes under bad practice by the way
                          <p className="ml-1">Promoted</p> // using nested ternary operators
                        ) : r.card.card.info.ribbon.text ? (
                          <>
                            <IoMdStar className="w-5 h-5 ml-1 text-yellow-500" />
                            <p className="text-yellow-500 font-bold">
                              {r?.card?.card?.info?.ribbon?.text}
                            </p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <p className="font-bold">{r?.card?.card?.info?.name}</p>
                    <p>₹{r?.card?.card?.info?.price / 100}</p>
                  </div>
                  <img
                    className="w-28 h-28 rounded-xl"
                    src={
                      r?.card?.card?.info?.imageId
                        ? SEARCH_RES_IMAGE + r?.card?.card?.info?.imageId
                        : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                    }
                    alt="SEARCH_RES_IMAGE"
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
