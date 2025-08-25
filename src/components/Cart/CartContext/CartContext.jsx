// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.size === item.size &&
//           cartItem.color === item.color
//       );
//       if (existingItem) {
//         return prevItems.map((cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.size === item.size &&
//           cartItem.color === item.color
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prevItems, item];
//     });
//   };

//   const removeFromCart = (id, size, color) => {
//     setCartItems((prevItems) =>
//       prevItems.filter(
//         (item) => !(item.id === id && item.size === size && item.color === color)
//       )
//     );
//   };

//   const updateQuantity = (id, size, color, delta) => {
//     setCartItems((prevItems) =>
//       prevItems
//         .map((item) =>
//           item.id === id && item.size === size && item.color === color
//             ? { ...item, quantity: item.quantity + delta }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);









// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children, setShowCart }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.size === item.size &&
//           cartItem.color === item.color
//       );
//       if (existingItem) {
//         return prevItems.map((cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.size === item.size &&
//           cartItem.color === item.color
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prevItems, item];
//     });
//     setShowCart(true); // Automatically open cart when item is added
//   };

//   const removeFromCart = (id, size, color) => {
//     setCartItems((prevItems) =>
//       prevItems.filter(
//         (item) => !(item.id === id && item.size === size && item.color === color)
//       )
//     );
//   };

//   const updateQuantity = (id, size, color, delta) => {
//     setCartItems((prevItems) =>
//       prevItems
//         .map((item) =>
//           item.id === id && item.size === size && item.color === color
//             ? { ...item, quantity: item.quantity + delta }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

































































import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children, setShowCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
    setShowCart(true); // Automatically open cart when item is added
  };

  const removeFromCart = (id, size, color) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (id, size, color, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);