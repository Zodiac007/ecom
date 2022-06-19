import React, { useState } from "react";

const appContext = React.createContext();

function ContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   setCartItems(JSON.parse(window.sessionStorage.getItem(cartItems)));
  // }, [cartItems]);

  const addRemoveFromCart = (pictureObj) => {
    if (pictureObj.addedToCart) {
      pictureObj.addedToCart = false;
      setCartItems((prevCartItems) => {
        return prevCartItems.filter(
          (cartItem) => cartItem.id !== pictureObj.id
        );
      });
    } else {
      setCartItems((prevCartItems) => {
        pictureObj.addedToCart = true;
        return [...prevCartItems, pictureObj];
      });
    }
  };
  // console.log(cartItems, "cartItem");

  return (
    <appContext.Provider value={{ addRemoveFromCart, cartItems }}>
      {props.children}
    </appContext.Provider>
  );
}

export { ContextProvider, appContext };
