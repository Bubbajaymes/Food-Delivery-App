import React, { useContext } from "react";
import { Context } from "./Context";
import FoodItem from "./FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(Context);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Foods Near You!</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rate={item.rate}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
