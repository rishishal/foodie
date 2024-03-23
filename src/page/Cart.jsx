import {useSelector} from "react-redux"

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items)
  console.log("CartItems",cartItems)
  const restaurant = useSelector((store)=> store.cart.restaurant)
  console.log("Restaurant",restaurant)
  return (
    <div>Cart</div>
  )
}

export default Cart