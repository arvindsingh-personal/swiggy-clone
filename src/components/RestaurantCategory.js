import React, { useState } from "react";
import ItemBody from "./ItemBody";

function RestaurantCategory({ data, showItems, setShowItems }) {
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="w-6/12 mx-auto my-4 border shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="font-bold">
          {data?.title} ({data?.itemCards?.length})
        </h3>
        {showItems ? <span>↑</span> : <span>↓</span>}
      </div>
      {showItems && <ItemBody items={data?.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;
