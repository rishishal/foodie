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
    <div
      className="max-w-60 m-auto flex justify-center items-center  border-2 rounded-xl p-2 shadow-lg cursor-pointer"
      onClick={handleMoreData}
    >
      <span className="font-Mulish font-semibold">Show more</span>
      <IoIosArrowDown className="mt-1" />
    </div>
  );
};

export default ShowMoreBtn;
