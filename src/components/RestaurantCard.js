import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="m-4 p-4 w-52 bg-gray-200 ">
      <img alt="burger" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="">{cuisines?.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <button className="absolute bg-black text-white ml-2 px-2 rounded-md">
          Open
        </button>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
