// import React, { useContext } from "react";
// import { appContext } from "../../context";

export default function CartItem({ cartItem }) {
  const { src, desc, title, price } = cartItem;
  // const { addRemoveFromCart } = useContext(appContext);

  return (
    <>
      <hr className="pt-4" />
      <div className="flex justify-between items-center py-4">
        <div>
          <h4 className="text-[#3d3d3d] text-base font-[500]">{title}</h4>
          <p className="text-[#b2b2b2] text-sm py-1 lg:py-2">{desc}</p>
          <p className="text-[#3d3d3d] text-sm font-[500]">${price}</p>
        </div>
        <div className="bg-[#ebebeb] rounded-md">
          <img src={src} width="120" height="120" alt="item" />
        </div>
      </div>
      {/* <div>
        <span onClick={() => addRemoveFromCart(cartItem)}>delete</span>
      </div> */}
      <hr className="pb-8" />
    </>
  );
}
