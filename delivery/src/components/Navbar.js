import React, { useContext, useState } from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";

import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { Context } from "./Context";


export default function Navbar({ setShowLogin }) {
  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount, getCartCount} = useContext(Context);

  return (
    <div className="navbar">
      <Link to='/'>
      <img className="logo" src={assets.logoo} alt="" />
      </Link>
      
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon"></div>
        <div className="dot"></div>
        <SearchOutlined
          style={{ fontSize: "24px", color: "#49557e", cursor: "pointer" }}
        />
        <Link to='/cart'>
         <Badge size="default" count={getCartCount()}>
          <ShoppingCartOutlined
            style={{ fontSize: "30px", color: "#49557e", cursor: "pointer" }}
          />
        </Badge>
        </Link>
       

        <Button
          onClick={() => setShowLogin(true)}
          type="primary"
          style={{
            background: hover ? "#fa8449" : "#ff5400",
            fontSize: "16px",
            color: "black",
            border: "",
            padding: "10px 30px",
            borderRadius: "",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
