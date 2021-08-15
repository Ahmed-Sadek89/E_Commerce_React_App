// get all product
export const fetchAllProducts = async () =>{
    const res = await fetch(`https://fakestoreapi.com/products/`);
    return (res.json());
}

// get products according to categry
  // a map function is used in Home.js

// get the selected product
export const fetchTheSelectedProduct = async (id) =>{
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}
