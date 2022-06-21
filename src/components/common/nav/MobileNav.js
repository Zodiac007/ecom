import Home from "../../assests/icons/home";
import Search from "../../assests/icons/search";
import Cart from "../../assests/icons/cart";
import More from "../../assests/icons/more";
import React, { useContext } from "react";
import { appContext } from "../../../context";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const { cartItems } = useContext(appContext);

  return (
    <div className="w-full fixed bottom-0 left-0 right-0 bg-[#f8f8f8] px-6 py-6 z-50 shadow-2xl">
      <div className="flex justify-between">
        <Link to="/">
          <Home />
        </Link>

        <Search />

        <Link to="/cart">
          <div className="relative w-8 h-8">
            <Cart />
            <span className="absolute right-0 top-0 rounded-full bg-black w-4 h-4 top right p-0 m-0 text-white font-mono text-[10px] flex items-center justify-center  leading-tight text-center">
              {cartItems.length}
            </span>
          </div>
        </Link>

        <More />
      </div>
    </div>
  );
}
