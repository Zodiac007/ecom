import Home from "../../assests/icons/home";
import Search from "../../assests/icons/search";
import Cart from "../../assests/icons/cart";
import More from "../../assests/icons/more";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { appContext } from "../../../context";

export default function DesktopNav() {
  const { cartItems } = useContext(appContext);

  return (
    <div className="w-full fixed bg-[#f8f8f8] left-0 right-0 top-0 py-4 px-52 flex justify-between items-center shadow-lg z-50">
      <Link to="/">
        <div className="bg-theme text-white px-4 py-2 rounded">
          <p>ECOM</p>
        </div>
      </Link>
      <div className="flex justify-between">
        <div>
          <Home />
        </div>

        <div className="px-6">
          <Search />
        </div>

        <Link to="/cart">
          <div className="relative w-8 h-8">
            <Cart />
            <span className="absolute right-0 top-0 rounded-full bg-black w-4 h-4 top right p-0 m-0 text-white font-mono text-[10px] flex items-center justify-center  leading-tight text-center">
              {cartItems.length}
            </span>
          </div>
        </Link>
        <div className="pl-6">
          <More />
        </div>
      </div>
    </div>
  );
}
