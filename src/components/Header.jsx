import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className='flex justify-between font-Raleway'>
        <Link to='/'>
          <div className='w-20 h-10 flex'>
            <img src={Logo} alt='logo' />
            <p className='font-extrabold text-4xl'>Foodie</p>
          </div>
        </Link>

        <div>
          <ul className='flex gap-6 font-bold text-lg'>
            <li>
              <NavLink
                to='/'
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
                to='/about'
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
              <Link to='/cart'>
                <div className='relative'>
                  <FaShoppingCart className='h-5 w-5' />
                </div>
                <span className='absolute top-5 w-4 h-4 text-white text-xs rounded-full bg-[#F39A25] font-Mulish'>
                  {cartItems.length}
                  {console.log(cartItems)}
                </span>
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-[#F39A25] font-semibold rounded-lg  px-4 lg:px-1 py-2 lg:py-2.5 mr-2 focus:outline-none'
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
