import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useCart } from '/src/components/Cart/CartContext/CartContext.jsx';
import LogoImg from '../../../public/ECommerceLogo.png';

function Nav({ setShowCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { cartItems } = useCart(); // Access cartItems from CartContext

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleCartClick = () => {
    console.log('Cart SVG clicked');
    setShowCart(prev => !prev);
  };



  return (
    <>
      <div className='navBar'>
      <Link to="/home" className='brandName'>

        <div className='brandName'><img className='logoimg'  src={LogoImg}></img>We Serve</div> 
        </Link>
        <div className={` navLinks ${menuOpen ? "active" : ""}`}>
          <ul className='navList'>
            <li><Link to="/shop"> Shop All</Link></li>
            <li> About</li>
            <li><Link to="/contactus">Contact</Link></li>
          </ul>
        </div>
        <div className='navLogin'>
          <p className='logIn'>Log In</p>
          <svg
            className='navCart'
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 164.9 196.4"
            preserveAspectRatio="xMinYMax meet"
            data-hook="svg-icon-9"
            onClick={handleCartClick}
          >
            <text x="84" y="131" dy=".35em" fontSize={'80px'} text-anchor="middle" className="uxskpx M846Y_" data-hook="items-count">{cartItems.length}</text>
            <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path>
            <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path>
          </svg>
        </div>
        <div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <img src='/src/assets/ham.png' alt="Menu" />
          </button>
        </div>
        {menuOpen && (
          <div className="overlay" ref={menuRef}>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
            <p className="overlay-login">Log In</p>
            <ul className="overlay-menu">
              <li><Link to="/shop" onClick={() => setMenuOpen(false)}> Shop All</Link></li>
              <li> About</li>
              <li><Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;