import React from 'react'
import './Catalog.css';
import items from './items'
import Card from './Card/Card';
import { useState,useEffect } from 'react';
import Arrow from '../../assets/Images/Arrow/Arrow.png'

function Catalog()  {

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3.4;
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = React.useRef(null);
  
  

  // last


   
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const delta = startX - x;
    if (delta > 50) {
      handleNext();
      setIsDragging(false);
    } else if (delta < -50) {
      handlePrev();
      setIsDragging(false);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  

  const handleNext = () => {
    if (currentIndex + cardsPerPage < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    else if (e.key === 'ArrowLeft') handlePrev();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  
  const visibleItems = items.slice(currentIndex, currentIndex + cardsPerPage);

 
  return (
    <>
    <div className='CataLog'>

      <div className='CatalogUpper'>
          <div className='Upperleft'>
             <p className='UpperleftHead'>New Arrivals</p>
             <p className='UpperleftPara'>Limited Edition</p>
          </div>
          <div className='UpperRight'>
             <p>Discover the latest trends in footwear. Elevate your look with our
               exclusive collection that blends style with comfort.</p>
          </div>
      </div> 


      <div className='CatalogLower'>
  {currentIndex > 0 && (
    <button className='nav-btn left' onClick={handlePrev}><img className='arrowLeft' src={Arrow}></img></button>
    
  )}

  <div className='carousel'>
    <div
      className='carousel-inner'
      style={{
        transform: `translateX(-${currentIndex * 330}px)`,
        transition: 'transform 0.3s ease-in-out',
        display: 'flex'
      }}

// addition
      ref={carouselRef}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseLeave}  
    >
      {items.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  </div>

  {currentIndex + 3 < items.length && (

    
    <button className='nav-btn right'  onClick={handleNext}>
      <img className='arrowRight' src={Arrow}></img>
    </button>
    
  )}
</div>
{/* <button className='nav-btn right' onClick={handleNext}>&gt;</button> */}

    </div>
    </>
  )
}

export default Catalog;



















