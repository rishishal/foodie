import { FaRegStopCircle } from "react-icons/fa";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { MEDIA_ASSETS } from "../utils/constans";
import { useSelector, useDispatch } from "react-redux";
import { addItem, decrementQuantity, incrementQuantity } from "../utils/CartSlice";

const AccordionItems = ({ items, resInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store)=> store.cart.items)
  

  const handleAdd = (item) => {
    dispatch(addItem({item, resInfo}));
  };

  
const handleIncrement = (item) => {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.card.info.id === item.card.info.id
  );
  if (existingItemIndex !== -1) {
    // If item already exists in the cart, dispatch the incrementQuantity action
    dispatch(incrementQuantity(existingItemIndex));
  }
};

const handleDecrement = (item) => {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.card.info.id === item.card.info.id
  );

  if (existingItemIndex !== -1) {
    // If item already exists in the cart, dispatch the decrementQuantity action
    dispatch(decrementQuantity(existingItemIndex));
  }
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
            {cartItems.some(
              (cartItem) => cartItem.card.info.id === item.card.info.id
            ) ? (
              // If item is in the cart, show inc-dec-counter
              <div className="inc-dec-count menu-counter">
                <div className="minus-counter" onClick={() => handleDecrement(item)}>-</div>
                <span>
                  {
                    cartItems.find(
                      (cartItem) => cartItem.card.info.id === item.card.info.id
                    )?.quantity
                  }
                </span>
                <div className="plus-counter" onClick={() => handleIncrement(item)}>+</div></div>
            ) : (


            <button
              className='absolute bottom-[10%] left-[22%] py-0.5 px-4 shadow-lg rounded-md text-green-600 bg-white border-green-600 font-medium cursor-pointer'
              onClick={() => handleAdd(item)}
            >
              ADD
            </button>
                )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItems;
