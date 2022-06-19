import React, { useContext } from "react";
import Cart from "../assests/icons/cart";
import { appContext } from "../../context";

export default function Card({ picture }) {
  const { src, title, price, desc } = picture;

  const { addRemoveFromCart } = useContext(appContext);
  const cartIcon = (
    <div
      className="absolute top-0 right-0 p-2 imgcart"
      onClick={() => addRemoveFromCart(picture)}
    >
      <Cart />
    </div>
  );

  return (
    <div className="">
      <div className="bg-[#ebebeb] rounded-md py-8 relative">
        <img className="drop-shadow p-6 img" src={src} alt={title} />
        {cartIcon}
      </div>
      <div className="py-4">
        <div className="flex justify-between">
          <h3 className="text-[#3d3d3d] text-sm font-medium">{title}</h3>
          <h3 className="text-[#3d3d3d] text-sm font-medium">${price}</h3>
        </div>
        <p className="text-[#b2b2b2] text-xs">{desc}</p>
      </div>
    </div>
  );
}
