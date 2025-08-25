import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ id,name, price, image }) {
  return (
    <>
    <Link to={`/product/${id}`} className="card">
    {/* <div className='card'> */}
      <img src={image} alt={name} className='card-img' />
      <p className='card-name'>{name}</p>
      <p className='card-price'>${price.toFixed(2)}</p>
    {/* </div> */}
    </Link>
    </>
  );
}

export default Card;
