import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemBody = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          className=" border-b-2 flex justify-between align-middle text-center pt-6 pb-8"
          key={item?.card?.info?.id}
        >
          <div className="text-start max-w-[35rem]">
            <p className="font-semibold text-black">{item?.card?.info?.name}</p>
            <p className="my-3">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="relative border">
            <img
              className="w-32 h-24 rounded-lg"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt="item-pic"
            />
            <button
              className="border text-sm bg-white shadow-sm rounded-md px-6 py-2 absolute -bottom-3 left-6"
              onClick={() => handleClick(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemBody;
