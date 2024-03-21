import { FaRegStopCircle } from "react-icons/fa";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { MEDIA_ASSETS } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const AccordionItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className='flex justify-between py-6 border-b-2 border-gray-300'
          key={item?.card?.info?.id}
        >
          <div className='flex flex-col gap-1 max-w-[80%] text-left'>
            {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
              <FaRegStopCircle className='text-green-700 w-4 h-4' />
            ) : (
              <FaRegSquareCaretUp className='text-red-700 w-4 h-4' />
            )}

            <h3 className='mr-1 text-sm font-medium text-gray-700 break-words'>
              {item?.card?.info?.name}
            </h3>
            <h4 className='text-sm font-semibold text-gray-700'>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h4>
            <p className='mt-2 leading-3 text-gray-800 w-[95%] tracking-normal	text-xs'>
              {item.card.info.description}
            </p>
          </div>

          <div className='relative h-28'>
            <img
              className='w-32 h-24 object-cover rounded-md'
              src={MEDIA_ASSETS + item.card.info.imageId}
              alt='ITEMIMG'
            />
            <button
              className='absolute bottom-[10%] left-[22%] py-0.5 px-4 shadow-lg rounded-md text-green-600 bg-white border-green-600 font-medium cursor-pointer'
              onClick={() => handleAdd(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItems;
