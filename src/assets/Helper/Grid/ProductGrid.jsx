import React from "react";
import './ProductGrid.css';
import items from '../../../components/Catalog/items';
import { Link } from 'react-router-dom';


// const ProductGrid = () => {
//   return (
//     <div className="grid-container">
//       {items.map((product) => (
//         <div key={product.id} className="grid-item">
//           <img src={product.image} alt={product.name} />
//           <p className="pName">{product.name}</p>
//           <p className="pPrice">${product.price}</p>
          
//         </div>
//       ))}
//     </div>
//   );
// };

const ProductGrid = ({ items }) => {
  return (
    <div className='product-grid'>
      {items.map((item, index) => (
        <Link key={item.id} to={`/product/${item.id}`} className="product-item">
        
          <img className="pImg" src={item.image} alt={item.name} />
          <p className="pName">{item.name}</p>
          <p className="pPrice">${item.price}</p>
        </Link>
      ))}
    </div>
  );
};



export default ProductGrid;