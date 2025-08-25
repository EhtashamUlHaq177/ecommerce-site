// const items=[
//     {
//         "id": 1,
//         "color":"Yellow",
//         "size":7,
//         "name": "Yellow sandels",
//         "price": 90.00,
//         "image": "src/assets/sandels/yellow sandels/sandel1.avif"
//     },
//     {
//         "id": 2,
//         "color":"Blue",
//         "size":8,
//         "name": "Blue Ballet Flats",
//         "price": 90.00,
//         "image": "src/assets/sandels/Blue Ballet Flats/Blue Ballet Flats.avif"
//     },
//     {
//         "id": 3,
//         "color":"Beige",
//         "size":8,
//         "name": "Beige Patent Leather Mules",
//         "price": 150.00,
//         "image": "src/assets/sandels/Beige Patent Leather Mules/Beige Patent Leather Mules.avif"
//     },
//     {
//         "id": 4,
//         "color":"Brown",
//         "size":7,
//         "name": "Versatile Casual Flats",
//         "price": 85.00,
//         "image": "src/assets/sandels/Versatile casual Flats/Versatile casual Flats.jpg"
//     },
//     {
//         "id": 5,
//         "color":"Grey",
//         "size":7,
//         "name": "Leather Sandals",
//         "price": 175.00,
//         "image":"src/assets/sandels/Leather Sandels/sandel5.avif"
//     },
//     {
//         "id": 6,
//         "color":"Black",
//         "size":9,
//         "name": "Black Leather Heels",
//         "price": 120.00,
//         "image": "src/assets/sandels/Black Leather Heels/Black Leather Heels.avif"
//     }
// ];
// export default items;




// const items = [
//   {
//     id: 1,
//     color: "Yellow",
//     size: 7,
//     name: "Yellow Sandals",
//     price: 90.00,
//     image: "src/assets/sandels/yellow sandels/sandel1.avif",
//     category: "Sandals", // Added category
//     date: "2025-03-15", // Added date for "Newest" sorting
//     trending: 80 // Added trending score for "Trending" sorting
//   },
//   {
//     id: 2,
//     color: "Blue",
//     size: 8,
//     name: "Blue Ballet Flats",
//     price: 90.00,
//     image: "src/assets/sandels/Blue Ballet Flats/Blue Ballet Flats.avif",
//     category: "Comfort", // Added category
//     date: "2025-02-10", // Added date for "Newest" sorting
//     trending: 65 // Added trending score for "Trending" sorting
//   },
//   {
//     id: 3,
//     color: "Beige",
//     size: 8,
//     name: "Beige Patent Leather Mules",
//     price: 150.00,
//     image: "src/assets/sandels/Beige Patent Leather Mules/Beige Patent Leather Mules.avif",
//     category: "Evening", // Added category
//     date: "2025-01-20", // Added date for "Newest" sorting
//     trending: 90 // Added trending score for "Trending" sorting
//   },
//   {
//     id: 4,
//     color: "Brown",
//     size: 7,
//     name: "Versatile Casual Flats",
//     price: 85.00,
//     image: "src/assets/sandels/Versatile casual Flats/Versatile casual Flats.jpg",
//     category: "Comfort", // Added category
//     date: "2024-12-05", // Added date for "Newest" sorting
//     trending: 50 // Added trending score for "Trending" sorting
//   },
//   {
//     id: 5,
//     color: "Grey",
//     size: 7,
//     name: "Leather Sandals",
//     price: 175.00,
//     image: "src/assets/sandels/Leather Sandels/sandel5.avif",
//     category: "Sandals", // Added category
//     date: "2025-04-01", // Added date for "Newest" sorting
//     trending: 75 // Added trending score for "Trending" sorting
//   },
//   {
//     id: 6,
//     color: "Black",
//     size: 9,
//     name: "Black Leather Heels",
//     price: 120.00,
//     image: "src/assets/sandels/Black Leather Heels/Black Leather Heels.avif",
//     category: "Evening", // Added category
//     date: "2025-03-01", // Added date for "Newest" sorting
//     trending: 85 // Added trending score for "Trending" sorting
//   }
 
// ];

// export default items;






































const items = [
  {
    id: 1,
    color: "Yellow",
    size: 7,
    name: "Yellow Sandals",
    price: 90.00,
    image: "/src/assets/sandels/yellow sandels/sandel1.avif",
    category: "Sandals",
    date: "2025-03-15",
    trending: 80,
    availableColors: ["Yellow", "White", "Black"], // Added available colors
    availableSizes: [6, 7, 8, 9], // Added available sizes
    quantity: 10, // Added total stock quantity
    description: "Bright and breezy yellow sandals perfect for summer outings. Made with soft leather straps and a cushioned sole for all-day comfort." // Added description
  },
  {
    id: 2,
    color: "Blue",
    size: 8,
    name: "Blue Ballet Flats",
    price: 90.00,
    image: "/src/assets/sandels/Blue Ballet Flats/Blue Ballet Flats.avif",
    category: "Comfort",
    date: "2025-02-10",
    trending: 65,
    availableColors: ["Blue", "Red", "Navy"], // Added available colors
    availableSizes: [7, 8, 9, 10], // Added available sizes
    quantity: 40, // Added total stock quantity
    description: "Classic blue ballet flats with a flexible sole and breathable lining, ideal for casual and professional settings." // Added description
  },
  {
    id: 3,
    color: "Beige",
    size: 8,
    name: "Beige Patent Leather Mules",
    price: 150.00,
    image: "/src/assets/sandels/Beige Patent Leather Mules/Beige Patent Leather Mules.avif",
    category: "Evening",
    date: "2025-01-20",
    trending: 90,
    availableColors: ["Beige", "Black", "Silver"], // Added available colors
    availableSizes: [7, 8, 9], // Added available sizes
    quantity: 30, // Added total stock quantity
    description: "Elegant beige patent leather mules with a sleek design, perfect for evening events or sophisticated outfits." // Added description
  },
  {
    id: 4,
    color: "Brown",
    size: 7,
    name: "Versatile Casual Flats",
    price: 85.00,
    image: "/src/assets/sandels/Versatile casual Flats/Versatile casual Flats.jpg",
    category: "Comfort",
    date: "2024-12-05",
    trending: 50,
    availableColors: ["Brown", "Tan", "Grey"], // Added available colors
    availableSizes: [6, 7, 8, 9], // Added available sizes
    quantity: 60, // Added total stock quantity
    description: "Versatile brown casual flats with a minimalist design, offering comfort and style for everyday wear." // Added description
  },
  {
    id: 5,
    color: "Grey",
    size: 7,
    name: "Leather Sandals",
    price: 175.00,
    image: "/src/assets/sandels/Leather Sandels/sandel5.avif",
    category: "Sandals",
    date: "2025-04-01",
    trending: 75,
    availableColors: ["Grey", "Brown", "White"], // Added available colors
    availableSizes: [6, 7, 8], // Added available sizes
    quantity: 25, // Added total stock quantity
    description: "Premium grey leather sandals with adjustable straps and durable soles, designed for both style and durability." // Added description
  },
  {
    id: 6,
    color: "Black",
    size: 9,
    name: "Black Leather Heels",
    price: 120.00,
    image: "/src/assets/sandels/Black Leather Heels/Black Leather Heels.avif",
    category: "Evening",
    date: "2025-03-01",
    trending: 85,
    availableColors: ["Black", "Red", "Gold"], // Added available colors
    availableSizes: [8, 9, 10], // Added available sizes
    quantity: 35, // Added total stock quantity
    description: "Chic black leather heels with a moderate heel height, perfect for adding elegance to any evening ensemble." // Added description
  }
];

export default items;