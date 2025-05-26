import React,{useContext} from 'react';
import { ProductContext } from '../utils/ProductContext';
import { Carousel } from './Carousel';

export const Popup = (
   // {produkt,zatvoriPreview}
) =>{
    const {selectedProduct,setSelectedProduct} = useContext(ProductContext)
    return(
        <div id='popup'>
           <button className='close-popup' onClick={()=>{setSelectedProduct({})}}>&times;</button>
           {/* <div className='popup-container'>
                <img
                    src ={selectedProduct.images[0]} alt= {selectedProduct.title}
                />
           </div> */}
           <Carousel
              title={selectedProduct.title}
              images={selectedProduct.images}  
              description={selectedProduct.description}
           />
        </div>
    )
}