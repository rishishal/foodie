import { ShoppingCart } from "lucide-react";
import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='w-20 h-10 flex'>
          <img src={Logo} alt='logo' />
          <p className='font-extrabold text-4xl'>Foodie</p>
        </div>

        <div>
          <ul className='flex gap-6 font-bold text-md'>
            <li>Home</li>
            <li>About</li>
            <li>
              <ShoppingCart />
            </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
