// import React, { useState } from 'react';
// import './CartItem.css';

// const CartItem = ({ name, price, size, color, image }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="cart-item">
//       <img src={image} alt={name} className="cart-item-image" />
//       <div className="cart-item-details">
//         <h3>{name}</h3>
//         <p className="price">${price}.00</p>
//         <p>Size: {size}</p>
//         {showDetails && <p>Color: {color}</p>}
//         <button onClick={toggleDetails} className="details-toggle">
//           {showDetails ? 'Less Details' : 'More Details'} <span className={`arrow ${showDetails ? 'up' : 'down'}`}>▼</span>
//         </button>
//         <div classQuantity="quantity-controls">
//           <button className="quantity-btn">-</button>
//           <span>1</span>
//           <button className="quantity-btn">+</button>
//         </div>
//         <p className="total-price">${price}.00</p>
//       </div>
//     </div>
//   );
// };

// export default CartItem;









// import React, { useState } from 'react';
// import './CartItem.css';
// const CartItem = ({ id, name, price, size, color, image, onDelete }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };
//   return (
//     <div className="cart-item">
//       <img src={image} alt={name} className="cart-item-image" />
//       <div className="cart-item-details">
//         <div className="cart-item-header">
//           <p className='Productname' >{name}</p>
//           <button className="delete-btn" onClick={() => onDelete(id)}>
//             <img   src='src/assets/svgs/DeleteSVg.svg'></img>
//           </button>
//         </div>
//         <p className="price">${price.toFixed(2)}</p>
//         <p className='size'>Size: {size}</p>
//         {showDetails && <p className='color'>Color: {color}</p>}
//         <button onClick={toggleDetails} className="details-toggle">
//           {showDetails ? 'Less Details' : 'More Details'} <span className={`arrow ${showDetails ? 'up' : 'down'}`}><img className='ArrowImg' src='src/assets/svgs/2.svg'></img></span>
//         </button>
//         <div className="quantity-controls">
//           <button className="quantity-btn">-</button>
//           <span>1</span>
//           <button className="quantity-btn">+</button>
//         </div>
//         <p className="total-price">${price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartItem;




























// Updated CartItem.js with working quantity buttons and total price per item
// import React, { useState } from 'react';
// import './CartItem.css';

// const CartItem = ({ id, name, price, size, color, image, quantity, onDelete, onQuantityChange }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) onQuantityChange(id, -1);
//   };

//   const handleIncrease = () => {
//     onQuantityChange(id, 1);
//   };

//   return (
//     <div className="cart-item">
//       <img src={image} alt={name} className="cart-item-image" />
//       <div className="cart-item-details">
//         <div className="cart-item-header">
//           <p className='Productname'>{name}</p>
//           <button className="delete-btn" onClick={() => onDelete(id)}>
//             <img src='src/assets/svgs/DeleteSVg.svg' alt='Delete' />
//           </button>
//         </div>
//         <p className="price">${price.toFixed(2)}</p>
//         <p className='size'>Size: {size}</p>
//         {showDetails && <p className='color'>Color: {color}</p>}
//         <button onClick={toggleDetails} className="details-toggle">
//           {showDetails ? 'Less Details' : 'More Details'} <span className={`arrow ${showDetails ? 'up' : 'down'}`}><img className='ArrowImg' src='src/assets/svgs/2.svg' alt='Toggle' /></span>
//         </button>
//         <div className="quantity-controls">
//           <button className="quantity-btn" onClick={handleDecrease}>-</button>
//           <span>{quantity}</span>
//           <button className="quantity-btn" onClick={handleIncrease}>+</button>
//         </div>
//         <p className="total-price">${(price * quantity).toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

































// import React from 'react';
// import './CartItem.css';

// function CartItem({
//   id,
//   name,
//   price,
//   size,
//   color,
//   image,
//   quantity,
//   onDelete,
//   onQuantityChange,
// }) {
//   return (
//     <div className="cart-item">
//       <img src={image} alt={name} className="cart-item-image" />
//       <div className="cart-item-details">
//         <p className="cart-item-name">{name}</p>
//         <p className="cart-item-size">Size: {size}</p>
//         <p className="cart-item-color">Color: {color}</p>
//         <p className="cart-item-price">${(price * quantity).toFixed(2)}</p>
//         <div className="cart-item-quantity">
//           <button onClick={() => onQuantityChange(-1)}>-</button>
//           <span>{quantity}</span>
//           <button onClick={() => onQuantityChange(1)}>+</button>
//         </div>
//         <button className="cart-item-delete" onClick={onDelete}>
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartItem;







































































import React from 'react';
import './CartItem.css';

function CartItem({
  id,
  name,
  price,
  size,
  color,
  image,
  quantity,
  onDelete,
  onQuantityChange,
}) {
  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-size">Size: {size}</p>
        <p className="cart-item-color">Color: {color}</p>
        <p className="cart-item-price">${(price * quantity).toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={() => onQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(1)}>+</button>
        </div>
        <img
          className="cart-item-delete"
          src="/src/assets/svgs/DeleteSVg.svg"
          alt="Delete"
          onClick={onDelete}
          style={{ cursor: 'pointer', width: '20px', height: '20px' }}
        />
      </div>
    </div>
  );
}

export default CartItem;


