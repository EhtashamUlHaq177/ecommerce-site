import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { useCart } from '/src/components/Cart/CartContext/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import Closeimg from '../../assets/svgs/CrossSvg.svg';
import LockSvg from '../../assets/svgs/LockSvg.svg';

function Cart({ showCart, setShowCart }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleDelete = (id, size, color) => {
    removeFromCart(id, size, color);
  };

  const handleQuantityChange = (id, size, color, delta) => {
    updateQuantity(id, size, color, delta);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!showCart) return null;

  return (
    <div className="Cart">
      <div className="CartHead">
        <p className="cartHeading">Cart</p>
        <p className="Cartpara">({cartItems.length} items)</p>
        <img
          className="CancelBtn"
          src={Closeimg}
          alt="Cancel"
          onClick={() => setShowCart(false)}
        />
      </div>
      <div className="CartItems">
        <div className="cart-page">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
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
      {cartItems.length > 0 && (
        <div className="CartCheckout">
          <div>
            <div className="SubTotal">
              <h3 className="SubTotalHead">Subtotal</h3>
              <p className="SubTotalPrice">${subtotal.toFixed(2)}</p>
            </div>
            <p className="CheckutPara">Taxes and shipping are calculated at checkout.</p>
            <div className="CheckoutBtns">
              <button className="CheckoutBtn" onClick={() => { navigate('/cart'); setShowCart(false); }}>
                Checkout
              </button>
              <button className="ViewCartBtn" onClick={() => { navigate('/cart'); setShowCart(false); }}>
                View Cart
              </button>
            </div>
            <div className="CheckoutSecure">
              <img className="lock" src={LockSvg} alt="Lock" />
              <p className="LockPara">secure checkout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;














