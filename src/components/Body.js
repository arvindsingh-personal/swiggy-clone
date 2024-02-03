import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

function filterData(searchText, allRestaurantsList) {
  return allRestaurantsList.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurantsList, setAllRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel();

  const { logggedInUser, setUserName } = useContext(UserContext);
  console.log("logggedInUser", logggedInUser);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8207224&lng=80.88305489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurantsList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("restaurant", filteredRestaurants[0]);

  return allRestaurantsList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black "
          placeholder="search here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4  py-[0.1rem] bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const data = filterData(searchText, allRestaurantsList);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          className="border border-black border-solid"
          value={logggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {!filteredRestaurants?.length ? (
          <h1>No restaurant found</h1>
        ) : (
          filteredRestaurants.map((restaurant, index) => {
            return (
              <Link
                className="border border-solid"
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <>
                  {restaurant?.info?.isOpen ? (
                    <RestaurantCardPromoted {...restaurant?.info} />
                  ) : (
                    <RestaurantCard {...restaurant?.info} />
                  )}
                </>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
