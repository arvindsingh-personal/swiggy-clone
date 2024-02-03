import { useDispatch, useSelector } from "react-redux";
import ItemBody from "./ItemBody";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center m-4 p-4">
      {cartItems?.length ? (
        <div>
          <h1 className="font-bold text-xl p-4">Cart</h1>
          <button
            className="rounded-md bg-black text-white px-4 py-1 m-4"
            onClick={handleClearCart}
          >
            Clear
          </button>
          <div className="w-6/12 m-auto border shadow-lg p-2">
            <ItemBody items={cartItems} />
          </div>
        </div>
      ) : (
        <div className="border w-6/12 m-auto">
          <h1>Cart is empty. return to Home page.</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
