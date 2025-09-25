import React, { useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Productpage.css';
import items from '../../components/Catalog/items';
import { useCart } from '/src/components/Cart/CartContext/CartContext.jsx';
import Arrow from '/src/assets/svgs/ArrowrightNav.svg';
import CloseSvg from '/src/assets/svgs/CrossSvg.svg';


function Productpage({ setShowCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = items.find((item) => item.id === parseInt(id));
  const currentIndex = items.findIndex((item) => item.id === parseInt(id));

  const colors = product ? product.availableColors : [];
  const sizes = product ? product.availableSizes : [];
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullScreenHovered, setIsFullScreenHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const imageRef = useRef(null);
  const fullScreenImageRef = useRef(null);

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    navigate(`/product/${items[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    navigate(`/product/${items[nextIndex].id}`);
  };

  const handleAddToCart = () => {
    setError('');
    if (!selectedSize) {
      setError('Please select a size.');
      return;
    }
    if (!selectedColor) {
      setError('Please select a color.');
      return;
    }
    if (!sizes.includes(parseInt(selectedSize))) {
      setError(`Size ${selectedSize} is not available for this product.`);
      return;
    }
    if (!colors.includes(selectedColor)) {
      setError(`Color ${selectedColor} is not available for this product.`);
      return;
    }
    if (quantity < 1 || quantity > product.quantity) {
      setError(`Quantity must be between 1 and ${product.quantity}.`);
      return;
    }
    alert('Item is added to the cart')

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: parseInt(quantity),
    });
    setShowCart(true); // Auto-open cart
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
    
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFullScreenMouseEnter = () => setIsFullScreenHovered(true);
  const handleFullScreenMouseLeave = () => setIsFullScreenHovered(false);

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleFullScreenMouseMove = (e) => {
    if (fullScreenImageRef.current) {
      const rect = fullScreenImageRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleImageClick = () => {
    setIsFullScreen(true);
    setIsZoomedIn(true);
  };

  const handleZoomToggle = () => setIsZoomedIn(!isZoomedIn);
  const handleClose = () => {
    setIsFullScreen(false);
    setIsZoomedIn(false);
    setIsHovered(false);
    setIsFullScreenHovered(false);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="ProductPage">
        <div className="ProductPageTop">
          <div className="TopNav">
            <Link to="/home" className="Home">
              Home
            </Link>
            <p>/</p>
            <p className="NameNav">{product.name}</p>
          </div>
          <div className="NavMobile">
            <img src={Arrow} alt="Arrow left" />
           <Link to="/home"
           > <p>Back to Home</p></Link>
          </div>
          <div className="TopNavNext">
            <img
              className="ArrowLeft"
              src={Arrow}
              alt="Arrow Left"
              onClick={handlePrev}
            />
            <p className="Prev" onClick={handlePrev} style={{ cursor: 'pointer' }}>
              Prev
            </p>
            <p>|</p>
            <p className="Next" onClick={handleNext} style={{ cursor: 'pointer' }}>
              Next
            </p>
            <img
              className="ArrowRight"
              src={Arrow}
              alt="Arrow Right"
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="ProductMiddle">
          <div className="MiddleLeft">
            <div className="Leftimg" style={{ position: 'relative' }}>
              <img
                ref={imageRef}
                src={product.image}
                alt={product.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={handleImageClick}
                style={{ cursor: 'pointer', width: '100%' }}
              />
              {isHovered && !isFullScreen && (
                <button
                  className="zoom-button"
                  style={{
                    position: 'absolute',
                    left: `${mousePosition.x - 15}px`,
                    top: `${mousePosition.y - 15}px`,
                    width: '30px',
                    height: '30px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    pointerEvents: 'none',
                  }}
                >
                  +
                </button>
              )}
            </div>
            <div className="LeftDesc">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="MiddleRight">
            <p className="product-title">{product.name}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
            <div className="form-group">
              <label className="form-label">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                {sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Color</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                value={quantity}
                min="1"
                max={product.quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <div className="descriptionPara">{product.description}</div>
        </div>
      </div>
      {isFullScreen && (
        <div className="fullscreen-overlay">
          <button className="close-button" onClick={handleClose}>
            <img src={CloseSvg} alt="Close" />
          </button>
          <div style={{ position: 'relative' }}>
            <img
              ref={fullScreenImageRef}
              src={product.image}
              alt={product.name}
              className="fullscreen-image"
              onClick={handleZoomToggle}
              onMouseEnter={handleFullScreenMouseEnter}
              onMouseLeave={handleFullScreenMouseLeave}
              onMouseMove={handleFullScreenMouseMove}
              style={{
                transform: isZoomedIn ? 'scale(1.5)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            />
            {isFullScreenHovered && (
              <button
                className="zoom-out-button"
                onClick={handleZoomToggle}
                style={{
                  position: 'absolute',
                  left: `${mousePosition.x - 15}px`,
                  top: `${mousePosition.y - 15}px`,
                  width: '30px',
                  height: '30px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  pointerEvents: 'none',
                }}
              >
                −
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Productpage;