import { createContext, useEffect, useState } from 'react';
export const ProductsProvider = createContext()

const ProductProvider = ({children}) => {
    
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        fetch("https://technology-electronics-three.vercel.app/products/")
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setAllProducts(data)
        })
    } ,[])
    
    return (
        
           <ProductsProvider.Provider value={allProducts}>
            {children}
           </ProductsProvider.Provider>
        
    );
};

export default ProductProvider;