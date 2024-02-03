import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [login, setLogin] = useState(false);

  const isOnline = useOnlineStatus();

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="header flex justify-between bg-pink-400 sm:bg-orange-200">
      <img alt="header_logo" className="w-28" src={LOGO_URL} />
      <div className="flex nav-items">
        <ul className="flex items-center p-2 m-2">
          <li className="p-4">
            {isOnline ? (
              <span className="font-bold text-green-500">Online</span>
            ) : (
              <span className="font-bold text-gray-600">Offline</span>
            )}
          </li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 font-bold">
            <Link to="/cart">Cart - ({cartItems?.length} items)</Link>
          </li>
          <li className="p-2 bg-gray-200 rounded-2xl">
            {login ? (
              <button onClick={handleClick}>Login</button>
            ) : (
              <button onClick={handleClick}>Logout</button>
            )}
          </li>
          <li className="p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
