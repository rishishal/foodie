import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredData, setListofRest } from "../utils/DataSlice";

const ShowMoreBtn = ({ setShowBtn }) => {
  const dispatch = useDispatch();
  const Data = useSelector((store) => store.data.data);
  const filteredData = useSelector((store) => store.data.filteredData);

  // Extract unique identifiers from existing objects
  const existingIds = new Set(
    Data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
      (rest) => rest.info.id
    )
  );

  // Filter additional objects based on unique identifiers
  const additionalRestaurants =
    Data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
      (rest) => !existingIds.has(rest.info.id)
    );

  const handleMoreData = () => {
    dispatch(setFilteredData([...filteredData, ...additionalRestaurants]));
    dispatch(setListofRest([...filteredData, ...additionalRestaurants]));
    setShowBtn(false);
  };

  return (
    <div className="flex items-center justify-center gap-1 border-2 rounded-xl w-1/6 p-2 shadow-lg m-auto">
      <button className="font-Mulish font-semibold" onClick={handleMoreData}>
        Show more
      </button>
      <IoIosArrowDown className="mt-1" />
    </div>
  );
};

export default ShowMoreBtn;
