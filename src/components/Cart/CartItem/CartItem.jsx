import React from 'react';
import './CartItem.css';
import deleteSvg from '/src/assets/svgs/DeleteSVg.svg';

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
          src={deleteSvg}
// fixed the source path here
          alt="Delete"
          onClick={onDelete}
          style={{ cursor: 'pointer', width: '20px', height: '20px' }}
        />
      </div>
    </div>
  );
}

export default CartItem;


