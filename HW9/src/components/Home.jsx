import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import axios from 'axios'
import { API_URL, API_URL2 } from './../utils/constants'
import { ProductContext } from '../utils/ProductContext'
import { AlbumContext } from '../utils/AlbumContext'
import Albums from './Albums'
import { useParams } from 'react-router'

export const Home = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})

    const [albums, setAlbums] = useState([])

    const { selection } = useParams()

    useEffect(() => {
        axios
            .get(`${API_URL}/products`)
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get(`${API_URL2}/albums`)
            .then((res) => {
                setAlbums(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    if (selection === 'products')
        return (
            <div id="home">
                <ProductContext.Provider
                    value={{
                        selectedProduct,
                        setSelectedProduct,
                        setProducts,
                        products,
                    }}
                >
                    <Products
                    // listOfProducts={products}
                    // izberiProduct = {(product)=>{setSelectedProduct(product)}}
                    // izbranProduct={selectedProduct}
                    // closeProduct={()=>{setSelectedProduct({})}}
                    />
                </ProductContext.Provider>
            </div>
        )

    if (selection === 'albums')
        return (
            <div id="home">
                <AlbumContext.Provider value={{ albums }}>
                    <Albums />
                </AlbumContext.Provider>
            </div>
        )
}
