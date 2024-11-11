import React, { useContext } from "react";
import { Context } from "../components/Context";

import MyButton from "../components/MyButton";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(Context);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Estate" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
          <MyButton text="PROCEED TO PAYMENT" />
        </div>
      </div>
    </form>
  );
}
