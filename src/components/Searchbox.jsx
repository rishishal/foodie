import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults, clearResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { SEARCH_QUERY_IMAGE } from "../utils/constans";

const Searchbox = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const location = useSelector((store) => store.location.location);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache !== null && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      if (searchQuery === "") {
        dispatch(clearResults());
      } else {
        searchFoodItems();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchFoodItems = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUGGESTIONS_API}?lat=${location.latitude}&lng=${
          location.longitude
        }&searchQuery=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      dispatch(cacheResults(json?.data?.suggestions));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="w-60 md:w-96">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch />
        </div>
        <input
          type="search"
          value={searchQuery}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-black rounded-lg"
          placeholder="Search Food & Restaurant"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && (
          <div
            className="absolute z-10 md:h-96 md:w-96 bg-white rounded-lg shadow-xl border border-gray-100 overflow-y-scroll"
            onMouseLeave={() => setShowSuggestions(false)}
          >
            <ul>
              {searchCache === null ? (
                <div className="flex flex-col">
                  <img
                    className="opacity-35"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SL-syk00PytaGYO7A34FpOZANnyui2Jo1-1hJ8PIecV1H80mVF1kjZHxHS2nz-a412k&usqp=CAU"
                    alt=""
                  ></img>
                  <h1 className="text-xl font-bold opacity-25">Search Food</h1>
                </div>
              ) : (
                searchCache.map((s, index) => (
                  <div
                    className="flex flex-wrap justify-between w-auto mb-4 mx-2"
                    key={index}
                  >
                    <Link to={"/search?query=" + s?.text.toLowerCase()}>
                      <li className="font-bold py-2 shadow-sm hover:bg-gray-100 cursor-pointer">
                        {s?.text}
                      </li>
                    </Link>
                    <img
                      className="rounded-lg w-20 h-20 "
                      src={SEARCH_QUERY_IMAGE + s?.cloudinaryId}
                      alt=""
                    />
                  </div>
                ))
              )}
            </ul>
          </div>
        )}

        <button
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-black"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbox;
