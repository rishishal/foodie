import Logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";
import { FaLocationArrow } from "react-icons/fa";
import { setLocation } from "../utils/LocationSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const City = useSelector((store) => store.data.city);
  const dispatch = useDispatch();
  const [nearMe, setNearMe] = useState(false);

  const handleLocationNearMe = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      dispatch(setLocation({ latitude, longitude }));
      setNearMe(true);
    });
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="flex justify-between items-center font-Raleway">
        <Link to="/">
          <div className="w-20 h-10 flex">
            <img src={Logo} alt="logo" />
            <p className="font-extrabold text-4xl">Foodie</p>
          </div>
        </Link>

        <div
          className="w-2/4 flex gap-3 cursor-pointer"
          onClick={handleLocationNearMe}
        >
          <FaLocationArrow className="w-5 h-5 text-[#F39A25]" />
          {nearMe ? (
            <p className="font-extrabold font-Mulish">{City}</p>
          ) : (
            <p className="font-extrabold font-Mulish">Select Location</p>
          )}
        </div>
        <Nav totalQuantity={totalQuantity} /> 
      </div>
    </>
  );
};

export default Header;
