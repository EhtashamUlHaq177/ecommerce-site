import React, { useState, useEffect } from 'react';
import './CartPage.css';
import CartCard from './CartCard/CartCard';
import { useCart } from '/src/components/Cart/CartContext/CartContext.jsx';
import promoSvg from '/src/assets/svgs/PromoSvg.svg';
import noteSvg from '/src/assets/svgs/noteSvg.svg';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promoUnClick, setPromoClicked] = useState(false);
  const [noteUnClick, setNoteClicked] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [note, setNote] = useState('');

  // Load promo code and note from localStorage on mount
  useEffect(() => {
    const savedPromo = localStorage.getItem('promoCode');
    const savedNote = localStorage.getItem('cartNote');
    if (savedPromo) setPromoCode(savedPromo);
    if (savedNote) setNote(savedNote);
  }, []);

  // Save promo code to localStorage on change
  useEffect(() => {
    localStorage.setItem('promoCode', promoCode);
  }, [promoCode]);

  // Save note to localStorage on change
  useEffect(() => {
    localStorage.setItem('cartNote', note);
  }, [note]);

  const handlePromoClick = () => {
    setPromoClicked(!promoUnClick);
  };

  const handleNoteClick = () => {
    setNoteClicked(!noteUnClick);
  };

  const handleDelete = (id, size, color) => {
    removeFromCart(id, size, color);
  };

  const handleQuantityChange = (id, size, color, delta) => {
    updateQuantity(id, size, color, delta);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="CartPage">
      <div className="Cartleft">
        <p className="leftHead">My cart</p>
        <hr className="LineBreak" />
        
        <div className="CartCard">
        <div className='CardOnly'>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartCard
                key={`${item.id}-${item.size}-${item.color}`}
                id={item.id}
                name={item.name}
                price={item.price}
                size={item.size}
                color={item.color}
                image={item.image}
                quantity={item.quantity}
                onDelete={() => handleDelete(item.id, item.size, item.color)}
                onQuantityChange={(delta) =>
                  handleQuantityChange(item.id, item.size, item.color, delta)
                }
              />
               
              
            ))
            
          ) : (
            <p>Your cart is empty.</p>
          )}
          
         
        </div>
        </div>
       
        
        <div>
        <hr className="LineBreak" />
          <div className="Promo" onClick={handlePromoClick}>
            <img className="PromoSvg" src={promoSvg} alt="Promo" />
            <p>Enter a promo code</p>
          </div>
          {promoUnClick && (
            <div className="promoField">
              <input
                className="PromoText"
                placeholder="e.g., SAVE50"
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="PromoBtn">Apply</button>
            </div>
          )}
        </div>
        <div>
          <div className="note" onClick={handleNoteClick}>
            <img className="noteSvg" src={noteSvg} alt="Note" />
            <p>Add a note</p>
          </div>
          {noteUnClick && (
            <textarea
              className="noteArea"
              placeholder="e.g., Leave outside the front door"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          )}
        </div>
      </div>
      <div className="Right">
        <p className="RightHead">Order summary</p>
        <hr className="LineBreak" />
        <div className="Subtotal">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <p className="EstimatedDelivery">Estimated Delivery</p>
        <hr className="LineBreak" />
        <div className="TotalAmmount">
          <p className="TotalPara">Total</p>
          <p className="TotalValue">${subtotal.toFixed(2)}</p>
        </div>
        <button className="CheckoutBtn">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;