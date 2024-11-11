import React from "react";
import MyButton from "./MyButton";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food</h2>
        <p>
          Explore a wide range of delicious meals from local restaurants,
          crafted to satisfy your cravings. Whether you're in the mood for a
          quick snack or a full feast, we've got you covered.
        </p>
        <MyButton text={"View Menu"} />
      </div>
    </div>
  );
}
