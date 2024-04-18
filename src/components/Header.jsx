import Logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";
import { FaLocationArrow } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { setLocation } from "../utils/LocationSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Nav, Navlinks } from "./Nav";
import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const City = useSelector((store) => store.data.city);
  const dispatch = useDispatch();
  const [nearMe, setNearMe] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 md:px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
        <div className="flex">
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="self-center whitespace-nowrap font-Raleway font-extrabold text-4xl">
              Foodie
            </span>
          </Link>
          <button
            type="button"
            className="flex gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-black"
            onClick={handleLocationNearMe}
          >
            <FaLocationArrow className="w-5 h-5 text-[#F39A25]" />
            {nearMe ? (
              <span className="font-extrabold font-Mulish">{City}</span>
            ) : (
              <span className="font-extrabold font-Mulish">
                Select Location
              </span>
            )}
          </button>
        </div>
        <div className="flex space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center order-4 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu className="w-6 h-6" />
          </button>
          <button className="md:hidden">
            <FaSearch />
          </button>
          <div className="hidden md:block">
            <Searchbox />
          </div>
        </div>
        <Nav totalQuantity={totalQuantity} />
        {isOpen && <Navlinks totalQuantity={totalQuantity} />}
      </div>
    </nav>
  );
};

export default Header;
