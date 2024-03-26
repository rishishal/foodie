import {useDispatch} from "react-redux"
import { decrementQuantity, incrementQuantity, removeItem } from "../utils/CartSlice";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegSquareCaretUp } from "react-icons/fa6";

const CartItem = ({items}) => {

  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  }

  const handleIncrement = (index) => {
    dispatch(incrementQuantity(index))
  }

  const handleDecrement = (index) => {
    dispatch(decrementQuantity(index))
  }


  return (
    <div>
      {items.map((item, index) => (
        <div key={item.card.info.id} className="flex items-center justify-between m-2">
          <div className="flex items-center gap-2">
            {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
            <FaRegStopCircle className='text-green-700 w-4 h-4' />
            ) : (
              <FaRegSquareCaretUp className='text-red-700 w-4 h-4' />
            )}
            <p className="text-sm max-w-[91%]">{item.card.info.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="inc-dec-count">
            <div className="minus-counter" onClick={() => handleDecrement(index)}>-</div>
            <span className="w-1/3" >{item.quantity}</span>
            <div className="plus-counter" onClick={() => handleIncrement(index)}>+</div>
            </div>
            <h4 className="max-w-16 text-sm items-center font-Mulish">
              ₹
              {(item.card.info.price
                ? item.card.info.price / 100 * item.quantity
                : item.card.info.defaultPrice / 100 * item.quantity).toFixed(2)}
            </h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItem