import React, { useState } from 'react';
import './CartCard.css';
import detailsSvg from '/src/assets/svgs/2.svg';
import deleteSvg from '/src/assets/svgs/DeleteSVg.svg';

function CartCard({
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
  const [moreDetails, setMoreDetails] = useState(false);
  const [moreDetailsText, setMoreDetailsText] = useState(false);

  const handleDetailsClick = () => {
    setMoreDetails(!moreDetails);
    setMoreDetailsText(!moreDetailsText);
  };

  return (
    <div className="CartCard">
      <div className="ProductLeft">
        <div className="LeftImg">
          <img src={image} alt={name} />
        </div>
        <div className="LeftDetails">
          <p className="ProductName">{name}</p>
          <p className="ProductPrice">${(price * quantity).toFixed(2)}</p>
          <p className="ProductSize">Size: {size}</p>
          {moreDetails && <p>Color: {color}</p>}
          <div className="ProductMoreDetails">
            <p className="DetailsText" onClick={handleDetailsClick}>
              {!moreDetailsText ? 'More Details' : 'Less Details'}
            </p>
            <img
              className="DetailsImg"
              src={detailsSvg}
              alt="Details"
              onClick={handleDetailsClick}
              style={{
                transform: moreDetails ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease-in-out',
              }}
            />
          </div>
           
        </div>
       
      </div>
      
      <div className="ProductRight">
        <div className="Quantity">
          <p onClick={() => onQuantityChange(-1)}>−</p>
          <p>{quantity}</p>
          <p onClick={() => onQuantityChange(1)}>+</p>
        </div>
        <div className="Price">${(price * quantity).toFixed(2)}</div>
        <div className="DeleteBtn">
          <img
            className="DeleteIcon"
            src={deleteSvg}
            alt="Delete"
            onClick={onDelete}
          />
        </div>
      </div>
     
    </div>
  );
}

export default CartCard;