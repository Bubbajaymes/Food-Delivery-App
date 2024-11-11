import { Rate } from "antd";
import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Context } from "./Context";

export default function FoodItem({
  id,
  name,
  rate,
  price,
  description,
  image,
}) {
  const { cartItems, addToCart, removeFromCart } = useContext(Context);
  return (
    <div className="food-item">
      <div className="img-container">
        <img className="item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <Rate defaultValue={rate} style={{fontSize: '17px'}} />
        </div>
        <p className="item-description">{description}</p>
        <p className="item-price">Ksh {price}</p>
      </div>
    </div>
  );
}
