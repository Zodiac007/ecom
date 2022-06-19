import React, { useContext } from "react";
import { appContext } from "../context";
import Plus from "../components/assests/icons/plus";
import Back from "../components/assests/icons/back";
import CartItem from "../components/common/CartItem";
import VisaCard from "../components/common/VisaCard";
import CustomButton from "../components/common/CustomButton";
import VisaCardSlider from "../components/common/VisaCardSlider";
import { visaCardDetails } from "../data";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const { cartItems } = useContext(appContext);

  const orderAmout = cartItems.map((k) => k.price).reduce((p, c) => p + c, 0);
  const cartItemsEl = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));
  return (
    <div className="mt-4 mb-40">
      <Link to="/">
        <div className="pb-4">
          <Back />
        </div>
      </Link>
      <h1 className="text-[#3d3d3d] text-4xl font-bold pb-4">Checkout</h1>
      {cartItemsEl}
      <div className="flex items-center justify-between pt-8 pb-4">
        <h2 className="text-[#3d3d3d] text-3xl font-bold">Payment</h2>
        <span className="flex items-center">
          <Plus /> <p className="pl-1 text-[#3d3d3d]">Add New Card</p>
        </span>
      </div>
      <div className="hidden lg:block">
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {visaCardDetails.map((item) => (
            <VisaCard
              key={item.id}
              cardcolor={item.cardcolor}
              cardno={item.cardno}
              holder={item.holder}
              expiredate={item.expiredate}
            />
          ))}
        </div>
      </div>
      <div className="block lg:hidden">
        <VisaCardSlider />
      </div>
      <div className="py-8">
        <hr />
      </div>
      <div>
        <div className="flex justify-between items-center text-[#3d3d3d]">
          <h4>Order</h4>
          <p>{orderAmout}.00$</p>
        </div>
        <div className="flex justify-between items-center py-2 text-[#3d3d3d]">
          <h4>Delivery</h4>
          <p>7.20$</p>
        </div>
        <div className="flex justify-between items-center text-lg text-[#141414] font-medium">
          <h4>Summary</h4>
          <p>{orderAmout + 7.2}0$</p>
        </div>
      </div>
      <CustomButton text="Pay Now" />
    </div>
  );
}
