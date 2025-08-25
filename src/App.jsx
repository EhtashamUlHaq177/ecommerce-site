// 















// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import './App.css';
// import Nav from './components/Nav/Nav.jsx';
// import Hero from './components/Hero/Hero';
// import Catalog from './components/Catalog/Catalog';
// import Transparent from './components/Transparent/Transparent';
// import Whyus from './components/WhyUs/Whyus';
// import Contactus from './components/Contactus/Contactus';
// import Footer from './components/Footer/Footer';
// import Shop from './Pages/Shop/Shop';
// import Productpage from './Pages/ProductPage/Productpage';
// import Home from './Pages/Home/Home';
// import Cart from './components/Cart/Cart.jsx'; // 🔥 Changed: Corrected import path

// function App() {
//   const [count, setCount] = useState(0);
//   const location = useLocation();
//   const [showCart, setShowCart] = useState(false); // 🔥 Already present: State for cart visibility

//   // Optional: Scroll to Contact section if route is "/contact"
//   useEffect(() => {
//     if (location.pathname === '/contactus') {
//       const contactSection = document.getElementById('contactus');
//       contactSection?.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [location]);

//   return (
//     <>
//       <div className={showCart ? 'blur-background' : ''}> {/* 🔥 Added: Wrapper div for blur effect */}
//         <Nav setShowCart={setShowCart} /> {/* 🔥 Changed: Pass setShowCart to Nav */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/contactus" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </div>
//       <Cart showCart={showCart} setShowCart={setShowCart} /> {/* 🔥 Added: Render Cart component with props */}
//     </>
//   );
// }

// export default App;









































// import { useState, useEffect } from 'react';
// import { Route, Routes, useLocation } from "react-router-dom"; // 🔥 Changed: Removed BrowserRouter
// import './App.css';
// import Nav from './components/Nav/nav';
// import Hero from './components/Hero/Hero';
// import Catalog from './components/Catalog/Catalog';
// import Transparent from './components/Transparent/Transparent';
// import Whyus from './components/WhyUs/Whyus';
// import Contactus from './components/Contactus/Contactus';
// import Footer from './components/Footer/Footer';
// import Shop from './Pages/Shop/Shop';
// import Productpage from './Pages/ProductPage/Productpage';
// import Home from './Pages/Home/Home';
// import Cart from './components/Cart/Cart.jsx';
// import CartPage from './Pages/CartPage/CartPage.jsx';

// function App() {
//   const [count, setCount] = useState(0);
//   const location = useLocation();
//   const [showCart, setShowCart] = useState(false);

//   // Optional: Scroll to Contact section if route is "/contact"
//   useEffect(() => {
//     if (location.pathname === '/contactus') {
//       const contactSection = document.getElementById('contactus');
//       contactSection?.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [location]);

//   // 🔥 Added: Debug log to confirm showCart state changes
//   useEffect(() => {
//     console.log('showCart state:', showCart);
//   }, [showCart]);

//   return (
//     <>
//       <div className={showCart ? 'blur-background' : ''}>
      
//         <Nav setShowCart={setShowCart} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/contactus" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/product/:id" element={<Productpage/>} />
//           <Route path="/cart" element={<CartPage/>} />
//         </Routes>
//         <Footer/>
//         <Cart showCart={showCart} setShowCart={setShowCart} />
//       </div>

//     </>
//   );
// }

// export default App;






































import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Catalog from './components/Catalog/Catalog';
import Transparent from './components/Transparent/Transparent';
import Whyus from './components/WhyUs/Whyus';
import Contactus from './components/Contactus/Contactus';
import Footer from './components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import Productpage from './Pages/ProductPage/Productpage';
import Home from './Pages/Home/Home';
import Cart from './components/Cart/Cart.jsx';
import CartPage from './Pages/CartPage/CartPage.jsx';
import { CartProvider } from './components/Cart/CartContext/CartContext.jsx';
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx';


function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (location.pathname === '/contactus') {
      const contactSection = document.getElementById('contactus');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    console.log('showCart state:', showCart);
  }, [showCart]);

  return (
    
    <CartProvider setShowCart={setShowCart}>
      <div className={showCart ? 'blur-background' : ''}>
        <Nav setShowCart={setShowCart} />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contactus" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
        <Cart showCart={showCart} setShowCart={setShowCart} />
      </div>
    </CartProvider>
  );
}

export default App;