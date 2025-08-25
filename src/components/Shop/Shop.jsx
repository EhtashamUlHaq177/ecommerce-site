// import React from 'react'
// import './Shop.css'
// import Nav from '../../components/Nav/nav';
// import ProductGrid from '../../assets/Helper/Grid/ProductGrid';
// import items from '../../components/Catalog/items';

//  function Shop ()  {



// const colors = ['Beige', 'Black', 'Brown', 'Grey', 'Nude', 'Pink', 'Red', 'White', 'Yellow', 'Blue'];
// const sizes = [6, 7, 8, 9, 10];

// const ProductFilter = () => {
//   const [priceRange, setPriceRange] = useState([50, 200]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState(productsData);

//   useEffect(() => {
//     let filtered = productsData.filter(product => 
//       product.price >= priceRange[0] && product.price <= priceRange[1] &&
//       (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
//       (selectedSizes.length === 0 || selectedSizes.includes(product.size))
//     );
//     setFilteredProducts(filtered);
//   }, [priceRange, selectedColors, selectedSizes]);

//   const handleColorChange = (color) => {
//     setSelectedColors(prev =>
//       prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
//     );
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSizes(prev =>
//       prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
//     );
//   };
// }

//   return (
//     <>
//         <div className='Shop'>
//           <div className='ShopNav'>
//               <p className='HomeNav'>Home</p>
//                <img className='ArrowNav' src='src/assets/svgs/ArrowrightNav.svg'></img>
//               <p className='HomeNav2'> All Products</p>
//            </div>
//            <div className='ShopSection'>
//             <div className='ShopLeft'> 
//              <div className='ShopLeftTop'>
//               <div className='Browse'>
//                <p>Browse by</p>
//               </div>
//               <div className='Browsecategory'>
//                <ul>
//                 <li>All Products</li>
//                 <li>Comfort</li>
//                 <li>Evening</li>
//                 <li>New Arrivals</li>
//                 <li>Sandals</li>
//                </ul>
//               </div>
//             </div>
//             <div className='ShopLeftBottom'>
//               <p className='FilterBy'>Filter By</p>

//             </div>
//            </div>
//            <div className='ShopRight'>
//             <div className='ShopRightTop'>
//               <p className='ShopRightTopHead'>All Products</p>
//               <p className='ShopRightTopPara'>This is your category description. It’s a great place to tell customers what this category is about, connect with your audience and draw attention to your products.</p>
//             </div>
//             <div className='FilterApplied'></div>
//             <div className='ShopRightMiddle'>
//               <div className='ShopRightMiddleLeft'>9 products</div>
//               <div className='ShopRightMiddleRight'>
//                 <div className='SortBy'>Sort by: </div>
//                 <div className='SortBycategory'>Recommended </div>
//                 <img  className='SortByArrow' src='src/assets/svgs/2.svg'></img>
//               </div>
//             </div>
//             <div className='GridItems'>
//               <ProductGrid/>
//             </div>
//            </div>
//            </div>
//         </div>
//     </>
//   )
// }
// export default Shop;



















// import React, { useState, useEffect } from 'react';
// import './Shop.css';
// import Nav from '../../components/Nav/nav';
// import ProductGrid from '../../assets/Helper/Grid/ProductGrid';
// import items from '../../components/Catalog/items';

// function Shop() {
//   const categories = ['All Products', 'Comfort', 'Evening', 'New Arrivals', 'Sandals'];
//   const colors = ['Beige', 'Black', 'Brown', 'Grey', 'Nude', 'Pink', 'Red', 'White', 'Yellow', 'Blue'];
//   const sizes = [6, 7, 8, 9, 10];

//   const [filteredItems, setFilteredItems] = useState(items);
//   const [selectedCategory, setSelectedCategory] = useState('All Products');
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [sortByOpen, setSortByOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('Recommended');

//   const [showPrice, setShowPrice] = useState(false);
//   const [showColor, setShowColor] = useState(false);
//   const [showSize, setShowSize] = useState(false);

//   const handleCategoryClick = (cat) => {
//     setSelectedCategory(cat);
//   };

//   const handleColorChange = (color) => {
//     setSelectedColors((prev) =>
//       prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
//     );
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSizes((prev) =>
//       prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
//     );
//   };

//   const sortItems = (data) => {
//     switch (selectedSort) {
//       case 'New':
//         return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
//       case 'Trending':
//         return [...data].sort((a, b) => b.trending - a.trending);
//       default:
//         return data;
//     }
//   };

//   useEffect(() => {
//     let result = items;

//     if (selectedCategory !== 'All Products') {
//       result = result.filter((item) => item.category === selectedCategory);
//     }

//     if (selectedColors.length > 0) {
//       result = result.filter((item) => selectedColors.includes(item.color));
//     }

//     if (selectedSizes.length > 0) {
//       result = result.filter((item) => selectedSizes.includes(item.size));
//     }

//     result = sortItems(result);
//     setFilteredItems(result);
//   }, [selectedCategory, selectedColors, selectedSizes, selectedSort]);

//   return (
//     <div className='Shop'>
//       <div className='ShopNav'>
//         <p className='HomeNav'>Home</p>
//         <img className='ArrowNav' src='src/assets/svgs/ArrowrightNav.svg' />
//         <p className='HomeNav2'>{selectedCategory}</p>
//       </div>

//       <div className='ShopSection'>
//         <div className='ShopLeft'>
//           <div className='ShopLeftTop'>
//             <div className='Browse'>
//               <p>Browse by</p>
//             </div>
//             <div className='Browsecategory'>
//               <ul>
//                 {categories.map((cat) => (
//                   <li key={cat} onClick={() => handleCategoryClick(cat)}>
//                     {cat}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className='ShopLeftBottom'>
//             <p className='FilterBy'>Filter By</p>

//             <div className='FilterSection'>
//               <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
//                 <span>Price</span> <span>{showPrice ? '-' : '+'}</span>
//               </div>

//               <div className='FilterToggle' onClick={() => setShowColor(!showColor)}>
//                 <span>Color</span> <span>{showColor ? '-' : '+'}</span>
//               </div>
//               {showColor && (
//                 <div className='FilterOptions'>
//                   {colors.map((color) => (
//                     <label key={color}>
//                       <input
//                         type='checkbox'
//                         checked={selectedColors.includes(color)}
//                         onChange={() => handleColorChange(color)}
//                       />
//                       {color}
//                     </label>
//                   ))}
//                 </div>
//               )}

//               <div className='FilterToggle' onClick={() => setShowSize(!showSize)}>
//                 <span>Size</span> <span>{showSize ? '-' : '+'}</span>
//               </div>
//               {showSize && (
//                 <div className='FilterOptions'>
//                   {sizes.map((size) => (
//                     <label key={size}>
//                       <input
//                         type='checkbox'
//                         checked={selectedSizes.includes(size)}
//                         onChange={() => handleSizeChange(size)}
//                       />
//                       {size}
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className='ShopRight'>
//           <div className='ShopRightTop'>
//             <p className='ShopRightTopHead'>{selectedCategory}</p>
//             <p className='ShopRightTopPara'>
//               This is your category description. It’s a great place to tell customers what this
//               category is about, connect with your audience and draw attention to your products.
//             </p>
//           </div>

//           <div className='FilterApplied'></div>

//           <div className='ShopRightMiddle'>
//             <div className='ShopRightMiddleLeft'>{filteredItems.length} products</div>

//             <div className='ShopRightMiddleRight'>
//               <div className='SortBy'>Sort by:</div>
//               <div
//                 className='SortBycategory'
//                 onClick={() => setSortByOpen(!sortByOpen)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {selectedSort}
//               </div>
//               <img
//                 className='SortByArrow'
//                 src='src/assets/svgs/2.svg'
//                 style={{ transform: sortByOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
//               />
//               {sortByOpen && (
//                 <div className='SortDropdown'>
//                   <div onClick={() => setSelectedSort('Recommended')}>Recommended</div>
//                   <div onClick={() => setSelectedSort('New')}>New</div>
//                   <div onClick={() => setSelectedSort('Trending')}>Trending</div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className='GridItems'>
//             <ProductGrid items={filteredItems} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;



















































































































// import React, { useState, useEffect } from 'react';
// import './Shop.css';
// import Nav from '../../components/Nav/nav';
// import ProductGrid from '../../assets/Helper/Grid/ProductGrid';
// import items from '../../components/Catalog/items';

// function Shop() {
//   const categories = ['All Products', 'Comfort', 'Evening', 'New Arrivals', 'Sandals'];
//   const colors = ['Beige', 'Black', 'Brown', 'Gray', 'Nude', 'Pink', 'Red', 'White', 'Yellow', 'Blue'];
//   const sizes = [6, 7, 8, 9, 10];

//   const [filteredItems, setFilteredItems] = useState(items);
//   const [selectedCategory, setSelectedCategory] = useState('All Products');
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [sortByOpen, setSortByOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('Recommended');
//   const [priceRange, setPriceRange] = useState({ min: 85, max: 180 });
//   const [showPrice, setShowPrice] = useState(false);
//   const [showColor, setShowColor] = useState(false);
//   const [showSize, setShowSize] = useState(false);

//   const handleCategoryClick = (cat) => {
//     setSelectedCategory(cat);
//   };

//   const handleColorChange = (color) => {
//     setSelectedColors((prev) =>
//       prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
//     );
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSizes((prev) =>
//       prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
//     );
//   };

//   const handlePriceChange = (e) => {
//     const value = parseInt(e.target.value);
//     setPriceRange((prev) => ({
//       min: Math.min(value, prev.max),
//       max: Math.max(value, prev.min)
//     }));
//   };

//   const clearAllFilters = () => {
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setPriceRange({ min: 0, max: 180 });
//     setSelectedCategory('All Products');
//   };

//   const sortItems = (data) => {
//     switch (selectedSort) {
//       case 'Newest':
//         return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
//       case 'Price (low to high)':
//         return [...data].sort((a, b) => a.price - b.price);
//       case 'Price (high to low)':
//         return [...data].sort((a, b) => b.price - a.price);
//       case 'Name A-Z':
//         return [...data].sort((a, b) => a.name.localeCompare(b.name));
//       case 'Name Z-A':
//         return [...data].sort((a, b) => b.name.localeCompare(a.name));
//       default:
//         return data;
//     }
//   };

//   useEffect(() => {
//     let result = items;

//     if (selectedCategory !== 'All Products') {
//       result = result.filter((item) => item.category === selectedCategory);
//     }

//     if (selectedColors.length > 0) {
//       result = result.filter((item) => selectedColors.includes(item.color));
//     }

//     if (selectedSizes.length > 0) {
//       result = result.filter((item) => selectedSizes.includes(item.size));
//     }

//     if (priceRange.min || priceRange.max) {
//       result = result.filter((item) => item.price >= priceRange.min && item.price <= priceRange.max);
//     }

//     result = sortItems(result);
//     setFilteredItems(result);
//   }, [selectedCategory, selectedColors, selectedSizes, priceRange, selectedSort]);

//   const appliedFilters = [
//     ...selectedColors.map(color => ({ type: 'Color', value: color })),
//     ...selectedSizes.map(size => ({ type: 'Size', value: size })),
//     priceRange.min !== 0 || priceRange.max !== 180 ? { type: 'Price', value: `${priceRange.min} - ${priceRange.max}` } : null
//   ].filter(f => f);

//   return (
//     <div className='Shop'>
//       <div className='ShopNav'>
//         <p className='HomeNav'>Home</p>
//         <img className='ArrowNav' src='src/assets/svgs/ArrowrightNav.svg' />
//         <p className='HomeNav2'>{selectedCategory}</p>
//       </div>

//       <div className='ShopSection'>
//         <div className='ShopLeft'>
//           <div className='ShopLeftTop'>
//             <div className='Browse'>
//               <p>Browse by</p>
//             </div>
//             <div className='Browsecategory'>
//               <ul>
//                 {categories.map((cat) => (
//                   <li key={cat} onClick={() => handleCategoryClick(cat)} className={selectedCategory === cat ? 'active' : ''}>
//                     {cat}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className='ShopLeftBottom'>
//             <p className='FilterBy'>Filter By</p>

//             <div className='FilterSection'>
//               {/* <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
//                 <span>Price</span> <span>{showPrice ? '-' : '+'}</span>
//               </div>
//               {showPrice && (
//                 <div className='FilterOptions'>
//                   <div className='price-slider'>
//                     <input
//                       type='range'
//                       min='0'
//                       max='180'
//                       value={priceRange.max}
//                       onChange={handlePriceChange}
//                     />
//                     <div className='price-display'>
//                       ${priceRange.min} - ${priceRange.max}
//                     </div>
//                   </div>
//                 </div>
//               )} */}




//              <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
//   <span>Price</span> <span>{showPrice ? '-' : '+'}</span>
// </div>
// {showPrice && (
//   <div className='FilterOptions'>
//     <div className='price-slider'>
//       <div className='slider-container'>
//         <input
//           type='range'
//           min='0'
//           max='180'
//           value={priceRange.min}
//           onChange={(e) => setPriceRange((prev) => ({ ...prev, min: parseInt(e.target.value) }))}
//           className='slider'
//         />
//         <input
//           type='range'
//           min='0'
//           max='180'
//           value={priceRange.max}
//           onChange={(e) => setPriceRange((prev) => ({ ...prev, max: parseInt(e.target.value) }))}
//           className='slider'
//         />
//       </div>
//       <div className='price-display'>
//         ${priceRange.min} - ${priceRange.max}
//       </div>
//     </div>
//   </div>
// )}


//               <div className='FilterToggle' onClick={() => setShowColor(!showColor)}>
//                 <span>Color</span> <span>{showColor ? '-' : '+'}</span>
//               </div>
//               {showColor && (
//                 <div className='FilterOptions'>
//                   {colors.map((color) => (
//                     <label key={color}>
//                       <input
//                         type='checkbox'
//                         checked={selectedColors.includes(color)}
//                         onChange={() => handleColorChange(color)}
//                       />
//                       {color}
//                     </label>
//                   ))}
//                 </div>
//               )}

//               <div className='FilterToggle' onClick={() => setShowSize(!showSize)}>
//                 <span>Size</span> <span>{showSize ? '-' : '+'}</span>
//               </div>
//               {showSize && (
//                 <div className='FilterOptions'>
//                   {sizes.map((size) => (
//                     <label key={size}>
//                       <input
//                         type='checkbox'
//                         checked={selectedSizes.includes(size)}
//                         onChange={() => handleSizeChange(size)}
//                       />
//                       {size}
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className='ShopRight'>
//           <div className='ShopRightTop'>
//             <p className='ShopRightTopHead'>{selectedCategory}</p>
//             <p className='ShopRightTopPara'>
//               This is your category description. It’s a great place to tell customers what this
//               category is about, connect with your audience and draw attention to your products.
//             </p>
//           </div>

//           {appliedFilters.length > 0 && (
//             <div className='FilterApplied'>
//               {appliedFilters.map((filter, index) => (
//                 <span key={index} className='applied-filter'>
//                   {filter.type}: {filter.value} <span onClick={() => {
//                     if (filter.type === 'Color') setSelectedColors(selectedColors.filter(c => c !== filter.value));
//                     if (filter.type === 'Size') setSelectedSizes(selectedSizes.filter(s => s !== filter.value));
//                     if (filter.type === 'Price') setPriceRange({ min: 0, max: 180 });
//                   }}>x</span>
//                 </span>
//               ))}
//               <span className='clear-all' onClick={clearAllFilters}>Clear All</span>
//             </div>
//           )}

//           <div className='ShopRightMiddle'>
//             <div className='ShopRightMiddleLeft'>{filteredItems.length} products</div>

//             <div className='ShopRightMiddleRight'>
//               <div className='SortBy'>Sort by:</div>
//               <div
//                 className='SortBycategory'
//                 onClick={() => setSortByOpen(!sortByOpen)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {selectedSort}
//               </div>
//               <img
//                 className='SortByArrow'
//                 src='src/assets/svgs/2.svg'
//                 style={{ transform: sortByOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
//               />
//               {sortByOpen && (
//                 <div className='SortDropdown'>
//                   <div onClick={() => { setSelectedSort('Recommended'); setSortByOpen(false); }}>Recommended</div>
//                   <div onClick={() => { setSelectedSort('Newest'); setSortByOpen(false); }}>Newest</div>
//                   <div onClick={() => { setSelectedSort('Price (low to high)'); setSortByOpen(false); }}>Price (low to high)</div>
//                   <div onClick={() => { setSelectedSort('Price (high to low)'); setSortByOpen(false); }}>Price (high to low)</div>
//                   <div onClick={() => { setSelectedSort('Name A-Z'); setSortByOpen(false); }}>Name A-Z</div>
//                   <div onClick={() => { setSelectedSort('Name Z-A'); setSortByOpen(false); }}>Name Z-A</div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className='GridItems'>
//             <ProductGrid items={filteredItems} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;




















































































































import React, { useState, useEffect } from 'react';
import './Shop.css';
import Nav from '../Nav/Nav';
import ProductGrid from '../../assets/Helper/Grid/ProductGrid';
import items from '../../components/Catalog/items';

function Shop() {
  const categories = ['All Products', 'Comfort', 'Evening', 'New Arrivals', 'Sandals'];
  const colors = ['Beige', 'Black', 'Brown', 'Gray', 'Nude', 'Pink', 'Red', 'White', 'Yellow', 'Blue'];
  const sizes = [6, 7, 8, 9, 10];

  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortByOpen, setSortByOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Recommended');
  const [priceRange, setPriceRange] = useState({ min: 85, max: 180 });
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false); // New state for filter modal

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange({ min: 0, max: 180 });
    setSelectedCategory('All Products');
  };

  const sortItems = (data) => {
    switch (selectedSort) {
      case 'Newest':
        return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'Price (low to high)':
        return [...data].sort((a, b) => a.price - b.price);
      case 'Price (high to low)':
        return [...data].sort((a, b) => b.price - a.price);
      case 'Name A-Z':
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      case 'Name Z-A':
        return [...data].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return data;
    }
  };

  useEffect(() => {
    let result = items;

    if (selectedCategory !== 'All Products') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (selectedColors.length > 0) {
      result = result.filter((item) => selectedColors.includes(item.color));
    }

    if (selectedSizes.length > 0) {
      result = result.filter((item) => selectedSizes.includes(item.size));
    }

    if (priceRange.min || priceRange.max) {
      result = result.filter((item) => item.price >= priceRange.min && item.price <= priceRange.max);
    }

    result = sortItems(result);
    setFilteredItems(result);
  }, [selectedCategory, selectedColors, selectedSizes, priceRange, selectedSort]);

  const appliedFilters = [
    ...selectedColors.map(color => ({ type: 'Color', value: color })),
    ...selectedSizes.map(size => ({ type: 'Size', value: size })),
    priceRange.min !== 0 || priceRange.max !== 180 ? { type: 'Price', value: `${priceRange.min} - ${priceRange.max}` } : null
  ].filter(f => f);

  return (
    <div className='Shop'>
      <div className='ShopNav'>
        <p className='HomeNav'>Home</p>
        <img className='ArrowNav' src='src/assets/svgs/ArrowrightNav.svg' />
        <p className='HomeNav2'>{selectedCategory}</p>
      </div>

      <div className='ShopSection'>
        <div className='ShopLeft'>
          <div className='ShopLeftTop'>
            <div className='Browse'>
              <p>Browse by</p>
            </div>
            <div className='Browsecategory'>
              <ul>
                {categories.map((cat) => (
                  <li key={cat} onClick={() => handleCategoryClick(cat)} className={selectedCategory === cat ? 'active' : ''}>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='ShopLeftBottom'>
            <p className='FilterBy'>Filter By</p>

            <div className='FilterSection'>

              <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
                <span>Price (${priceRange.min} - ${priceRange.max})</span> <span>{showPrice ? '-' : '+'}</span>
              </div>
              {showPrice && (
                <div className='FilterOptions'>
                  <div className='price-slider'>
                    <div className='slider-container'>
                      <input
                        type='range'
                        min='0'
                        max='180'
                        value={priceRange.min}
                        onChange={(e) => {
                          const newMin = parseInt(e.target.value);
                          setPriceRange((prev) => ({
                            ...prev,
                            min: newMin <= prev.max ? newMin : prev.max - 1
                          }));
                        }}
                        className='slider min-slider'
                      />
                      <input
                        type='range'
                        min='0'
                        max='180'
                        value={priceRange.max}
                        onChange={(e) => {
                          const newMax = parseInt(e.target.value);
                          setPriceRange((prev) => ({
                            ...prev,
                            max: newMax >= prev.min ? newMax : prev.min + 1
                          }));
                        }}
                        className='slider max-slider'
                      />
                    </div>
                    <div className='price-display'>
                      ${priceRange.min} - ${priceRange.max}
                    </div>
                  </div>
                </div>
              )}
              {/* <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
                <span>Price</span> <span>{showPrice ? '-' : '+'}</span>
              </div>
              {showPrice && (
                <div className='FilterOptions'>
                  <div className='price-slider'>
                    <div className='slider-container'>
                      <input
                        type='range'
                        min='0'
                        max='180'
                        value={priceRange.min}
                        onChange={(e) => setPriceRange((prev) => ({ ...prev, min: parseInt(e.target.value) }))}
                        className='slider'
                      />
                      <input
                        type='range'
                        min='0'
                        max='180'
                        value={priceRange.max}
                        onChange={(e) => setPriceRange((prev) => ({ ...prev, max: parseInt(e.target.value) }))}
                        className='slider'
                      />
                    </div>
                    <div className='price-display'>
                      ${priceRange.min} - ${priceRange.max}
                    </div>
                  </div>
                </div>
              )} */}

              <div className='FilterToggle' onClick={() => setShowColor(!showColor)}>
                <span>Color</span> <span>{showColor ? '-' : '+'}</span>
              </div>
              {showColor && (
                <div className='FilterOptions'>
                  {colors.map((color) => (
                    <label key={color}>
                      <input
                        type='checkbox'
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorChange(color)}
                      />
                      {color}
                    </label>
                  ))}
                </div>
              )}

              <div className='FilterToggle' onClick={() => setShowSize(!showSize)}>
                <span>Size</span> <span>{showSize ? '-' : '+'}</span>
              </div>
              {showSize && (
                <div className='FilterOptions'>
                  {sizes.map((size) => (
                    <label key={size}>
                      <input
                        type='checkbox'
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleSizeChange(size)}
                      />
                      {size}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='ShopRight'>
          <div className='ShopRightTop'>
            <p className='ShopRightTopHead'>{selectedCategory}</p>
            <p className='ShopRightTopPara'>
              This is your category description. It’s a great place to tell customers what this
              category is about, connect with your audience and draw attention to your products.
            </p>
          </div>

          {/* Filter & Sort Button for Mobile */}
          <div className='FilterSortMobile'>
            <div className='FilterSortButton' onClick={() => setShowFilterModal(true)}>
              Filter & Sort
            </div>
          </div>

          {/* Filter Modal for Mobile */}
          {showFilterModal && (
            <div className='FilterModal'>
              <div className='FilterModalContent'>
                <div className='FilterModalHeader'>
                  <p>Filter & Sort ({filteredItems.length} products)</p>
                  <span onClick={() => setShowFilterModal(false)}>X</span>
                </div>

                <div className='FilterSection'>
                  <div className='FilterToggle' onClick={() => setSortByOpen(!sortByOpen)}>
                    <span>Sort by:</span> <span>{sortByOpen ? '-' : '+'}</span>
                  </div>
                  {sortByOpen && (
                    <div className='FilterOptions'>
                      <div onClick={() => { setSelectedSort('Recommended'); setSortByOpen(false); }}>Recommended</div>
                      <div onClick={() => { setSelectedSort('Newest'); setSortByOpen(false); }}>Newest</div>
                      <div onClick={() => { setSelectedSort('Price (low to high)'); setSortByOpen(false); }}>Price (low to high)</div>
                      <div onClick={() => { setSelectedSort('Price (high to low)'); setSortByOpen(false); }}>Price (high to low)</div>
                      <div onClick={() => { setSelectedSort('Name A-Z'); setSortByOpen(false); }}>Name A-Z</div>
                      <div onClick={() => { setSelectedSort('Name Z-A'); setSortByOpen(false); }}>Name Z-A</div>
                    </div>
                  )}



                  <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
                    <span>Price (${priceRange.min} - ${priceRange.max})</span> <span>{showPrice ? '-' : '+'}</span>
                  </div>
                  {showPrice && (
                    <div className='FilterOptions'>
                      <div className='price-slider'>
                        <div className='slider-container'>
                          <input
                            type='range'
                            min='0'
                            max='180'
                            value={priceRange.min}
                            onChange={(e) => {
                              const newMin = parseInt(e.target.value);
                              setPriceRange((prev) => ({
                                ...prev,
                                min: newMin <= prev.max ? newMin : prev.max - 1
                              }));
                            }}
                            className='slider min-slider'
                          />
                          <input
                            type='range'
                            min='0'
                            max='180'
                            value={priceRange.max}
                            onChange={(e) => {
                              const newMax = parseInt(e.target.value);
                              setPriceRange((prev) => ({
                                ...prev,
                                max: newMax >= prev.min ? newMax : prev.min + 1
                              }));
                            }}
                            className='slider max-slider'
                          />
                        </div>
                        <div className='price-display'>
                          ${priceRange.min} - ${priceRange.max}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* <div className='FilterToggle' onClick={() => setShowPrice(!showPrice)}>
                    <span>Price (${priceRange.min} - ${priceRange.max})</span> <span>{showPrice ? '-' : '+'}</span>
                  </div>
                  {showPrice && (
                    <div className='FilterOptions'>
                      <div className='price-slider'>
                        <div className='slider-container'>
                          <input
                            type='range'
                            min='0'
                            max='180'
                            value={priceRange.min}
                            onChange={(e) => setPriceRange((prev) => ({ ...prev, min: parseInt(e.target.value) }))}
                            className='slider'
                          />
                          <input
                            type='range'
                            min='0'
                            max='180'
                            value={priceRange.max}
                            onChange={(e) => setPriceRange((prev) => ({ ...prev, max: parseInt(e.target.value) }))}
                            className='slider'
                          />
                        </div>
                        <div className='price-display'>
                          ${priceRange.min} - ${priceRange.max}
                        </div>
                      </div>
                    </div>
                  )} */}






                  <div className='FilterToggle' onClick={() => setShowColor(!showColor)}>
                    <span>Color</span> <span>{showColor ? '-' : '+'}</span>
                  </div>
                  {showColor && (
                    <div className='FilterOptions'>
                      {colors.map((color) => (
                        <label key={color}>
                          <input
                            type='checkbox'
                            checked={selectedColors.includes(color)}
                            onChange={() => handleColorChange(color)}
                          />
                          {color}
                        </label>
                      ))}
                    </div>
                  )}

                  <div className='FilterToggle' onClick={() => setShowSize(!showSize)}>
                    <span>Size</span> <span>{showSize ? '-' : '+'}</span>
                  </div>
                  {showSize && (
                    <div className='FilterOptions'>
                      {sizes.map((size) => (
                        <label key={size}>
                          <input
                            type='checkbox'
                            checked={selectedSizes.includes(size)}
                            onChange={() => handleSizeChange(size)}
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {appliedFilters.length > 0 && (
            <div className='FilterApplied'>
              {appliedFilters.map((filter, index) => (
                <span key={index} className='applied-filter'>
                  {filter.type}: {filter.value} <span onClick={() => {
                    if (filter.type === 'Color') setSelectedColors(selectedColors.filter(c => c !== filter.value));
                    if (filter.type === 'Size') setSelectedSizes(selectedSizes.filter(s => s !== filter.value));
                    if (filter.type === 'Price') setPriceRange({ min: 0, max: 180 });
                  }}>x</span>
                </span>
              ))}
              <span className='clear-all' onClick={clearAllFilters}>Clear All</span>
            </div>
          )}

          <div className='ShopRightMiddle'>
            <div className='ShopRightMiddleLeft'>{filteredItems.length} products</div>

            <div className='ShopRightMiddleRight DesktopSort'>
              <div className='SortBy'>Sort by:</div>
              <div
                className='SortBycategory'
                onClick={() => setSortByOpen(!sortByOpen)}
                style={{ cursor: 'pointer' }}
              >
                {selectedSort}
              </div>
              <img
                onClick={() => setSortByOpen(!sortByOpen)}
                className='SortByArrow'
                src='src/assets/svgs/2.svg'
                style={{ transform: sortByOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
              {sortByOpen && (
                <div className='SortDropdown'>
                  <div onClick={() => { setSelectedSort('Recommended'); setSortByOpen(false); }}>Recommended</div>
                  <div onClick={() => { setSelectedSort('Newest'); setSortByOpen(false); }}>Newest</div>
                  <div onClick={() => { setSelectedSort('Price (low to high)'); setSortByOpen(false); }}>Price (low to high)</div>
                  <div onClick={() => { setSelectedSort('Price (high to low)'); setSortByOpen(false); }}>Price (high to low)</div>
                  <div onClick={() => { setSelectedSort('Name A-Z'); setSortByOpen(false); }}>Name A-Z</div>
                  <div onClick={() => { setSelectedSort('Name Z-A'); setSortByOpen(false); }}>Name Z-A</div>
                </div>
              )}
            </div>
          </div>

          <div className='GridItems'>
            <ProductGrid items={filteredItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

















































































