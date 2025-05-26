import React, { useContext } from 'react'
import { Popup } from './Popup'
import { ProductContext } from '../utils/ProductContext'

export const Products = (
    {
        // listOfProducts,
        // ,izberiProduct,izbranProduct,closeProduct
    }
) => {
    const { selectedProduct, setSelectedProduct, products } =
        useContext(ProductContext)
    console.log(products)
    return (
        <div id="products">
            {products.map((product) => {
                return (
                    <div
                        className="image-holder"
                        key={product.id}
                        onClick={() => {
                            setSelectedProduct(product)
                        }}
                    >
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                )
            })}
            {Object.keys(selectedProduct).length > 1 && <Popup />}
        </div>
    )
}
