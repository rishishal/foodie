import { useEffect, useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { MEDIA_ASSETS } from "../utils/constans";
import toast from 'react-hot-toast';
import CartItem from "../components/CartItem";
import { clearCart } from "../utils/CartSlice";
import { IoTimerSharp } from "react-icons/io5";


const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartItems = useSelector((store)=>store.cart.items)
  const restaurantInfo = useSelector((store)=> store.cart.restaurant)


  useEffect(() => {
    // Calculate total price when cartItems change
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.card.info.price
          ? item.card.info.price / 100 * item.quantity
          : item.card.info.defaultPrice / 100 * item.quantity;
      });
      total = Number(total.toFixed(2));
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  useEffect(() => {
    // Calculate total amount when totalPrice or other relevant values change
    const calculateTotalAmount = () => {
      // Add GST and restaurant charges to totalPrice
      const gstAndCharges = Number((totalPrice * 0.18).toFixed(2)); // Assuming GST is 18%

      console.log(restaurantInfo?.feeDetails?.totalFee / 100 || 0)

      // Update the total amount
      const finalTotalAmount = Number((totalPrice + (restaurantInfo?.feeDetails?.totalFee / 100 || 0) + gstAndCharges).toFixed(2));
      setTotalAmount(
        (finalTotalAmount)
      );
    };

    calculateTotalAmount();
  }, [totalPrice, restaurantInfo?.feeDetails?.totalFee]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  return cartItems.length === 0?(
    <div>
      <img
      className="flex justify-center items-center m-auto w-1/4 h-1/4 my-12"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt=""
      />
      <h3 className="text-2xl font-bold text-gray-600 font-Mulish mb-1">Your cart is empty</h3>
      <p className="font-Mulish text-base font-semibold mb-6">You can go to home page to view more restaurants</p>
      <Link
            className="btn-style btn-add"
            to={"/"}
          >
            <button className="p-2 rounded-lg shadow-xl font-Mulish font-semibold text-white bg-[#F39A25]">SEE RESTAURANTS NEAR YOU</button>
          </Link>
    </div>
  ):(
    <div>
      <h3 className="text-center m-6 text-3xl font-Raleway font-extrabold">Cart</h3>
      <div className="my-5 mx-auto max-w-md rounded-xl border-2 p-4 border-[#F39A25]">
        <div className="flex justify-between items-center border-b-1 border-[#d3d3d3] mb-1 pb-4">
          <div className="font-Mulish text-left mb-4">
            <h3 className="text-lg font-bold">{restaurantInfo.name}</h3>
            <p className="text-sm text-gray-600 font-semibold">{restaurantInfo.cuisines.join(", ")}</p>
            <p className="text-sm text-gray-600 font-semibold">
              {restaurantInfo.locality},{" "}
              {restaurantInfo.sla.lastMileTravelString}
            </p>
            <div className="flex items-center gap-2 mt-2 font-Mulish">
            <IoTimerSharp className="h-5 w-5"/>
              <span className="text-xs font-semibold">
                {restaurantInfo.sla.minDeliveryTime}-
                {restaurantInfo.sla.maxDeliveryTime} MINS
              </span>
            </div>
          </div>
          <img className="object-cover rounded-lg w-32 h-24" src={MEDIA_ASSETS + restaurantInfo.cloudinaryImageId} alt="" />
        </div>
        <div className="border-2 border-dashed border-[#d3d3d3] mb-4 rounded-xl">
          <CartItem items={cartItems} />
        </div>

       
        <div className="flex justify-between">
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => {
            handleClearCart();
            toast.success("Cart cleared. Happy shopping")
          }}
          
          > Clear Cart</button>
          <Link
            to={"/restaurants/" + restaurantInfo.id}
          >
            <button className="focus:outline-none text-white bg-[#F39A25] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:focus:ring-yellow-900" >Add More Items</button>
          </Link>
        </div>
        <div className="font-Mulish">
          <p className="text-sm font-bold">Bill Details</p>
          <div className="flex justify-between text-sm">
            <p>Item Total</p>
            <p>₹{totalPrice}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Delivery Fee | {restaurantInfo.sla.lastMileTravelString}</p>
            <p>₹{restaurantInfo.feeDetails.totalFee / 100 || 0}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>GST and Restaurant Charges</p>
            <p>₹{(totalPrice * 0.18).toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-base  border-t-2 border-[#000] mt-3 pt-1 font-bold">
            <p>To Pay</p>
            <p>₹{totalAmount}</p>
          </div>
        </div>
      </div>
      <div>
        <Link onClick={() => {
          toast("I am working on it!!", {
            icon: '🙏',
            style: {
              textAlign: "center",
            },
            duration: 2500,
          }),
          handleClearCart();
        }} to={"/"}>
          <button className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Place Order</button></Link>
      </div>
    </div>
  )
}

export default Cart