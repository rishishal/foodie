import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Nav = ({ totalQuantity }) => {
  return (
    <div>
      <ul className="">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#F39A25]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F39A25] lg:p-0`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[#F39A25]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F39A25] lg:p-0`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="h-5 w-5" />
            </div>
            <span className="absolute top-7 w-4 h-4 text-white text-xs rounded-full bg-[#F39A25] font-Mulish">
              {totalQuantity}
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-[#F39A25] font-semibold rounded-lg  px-4 lg:px-1 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Log in
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
