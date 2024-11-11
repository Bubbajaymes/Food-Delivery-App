import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../components/Context";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

export default function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <FontAwesomeIcon
                    onClick={() => removeFromCart(item._id)}
                    icon={faXmark}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="total-details">
              <p>Subtotal</p>
              <p>Ksh {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery Fee</p>
              <p>Ksh {getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>Ksh {getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
          <Link to='/order'>
          <MyButton text="PROCEED TO CHECKOUT" />  
          </Link>
                
           
            </div>

          
        <div className="promocode">
          <div>
            <p>
              If you have a promo code, Enter it here
            </p>
            <div className="promocode-input">
              <input type="text" placeholder="promo code"/>
              <MyButton text={"SUBMIT"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
