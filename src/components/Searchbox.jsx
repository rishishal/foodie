import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setFilterData } from "../utils/DataSlice";

const Searchbox = () => {
  const dispatch = useDispatch();
  const ListOfRest = useSelector((store) => store.data.list);
  const filterData = useSelector((store) => store.data.filterData);
  const [searchText, setSearchText] = useState("");

  return (
    <form className="max-w-sm">
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
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-black rounded-lg"
          placeholder="Search Food & Restaurant"
          value={searchText}
          onChange={(e) => {
            const searchTextValue = e.target.value.toLowerCase();
            setSearchText(searchTextValue);

            if (searchTextValue === "") {
              // If search text is empty, reset filtered data to original data
              dispatch(setFilterData(ListOfRest));
            } else {
              // Filter data based on search text
              const filterList = filterData.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchTextValue) ||
                  res.info.cuisines.some((cuisine) =>
                    cuisine.toLowerCase().includes(searchTextValue)
                  )
              );
              dispatch(setFilterData(filterList)); // Dispatch filtered data
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            setSearchText("");
          }}
          className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-black"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbox;
