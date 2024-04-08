import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setFilterData, setList } from "../utils/DataSlice";

const ShowMoreBtn = ({ setShowBtn, responseData }) => {
  const dispatch = useDispatch();
  const filterData = useSelector((store) => store.data.filterData);

  // Extract unique identifiers from existing objects
  const existingIds = new Set(
    responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
      (rest) => rest.info.id
    )
  );

  // Filter additional objects based on unique identifiers
  const additionalRestaurants =
    responseData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
      (rest) => !existingIds.has(rest.info.id)
    );

  const handleMoreData = () => {
    dispatch(setFilterData([...filterData, ...additionalRestaurants]));
    dispatch(setList([...filterData, ...additionalRestaurants]));
    setShowBtn(false);
  };

  return (
    <div
      className="max-w-60 m-auto flex justify-center items-center mt-8 border-2 rounded-xl p-2 shadow-lg cursor-pointer"
      onClick={handleMoreData}
    >
      <span className="font-Mulish font-semibold">Show more</span>
      <IoIosArrowDown className="mt-1" />
    </div>
  );
};

export default ShowMoreBtn;
