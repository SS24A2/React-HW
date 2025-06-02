import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductRequest } from './../actions/ProductActions'

export const Product = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.ProductReducer.products)
    const greska = useSelector((state) => state.ProductReducer.error)

    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    // useEffect(() => {
    //     dispatch(fetchProductRequest(limit, (page - 1) * limit))
    // }, [dispatch])

    return (
        <div id="product">
            <label>Number of results to display:</label>
            <input
                type="number"
                min={1}
                style={{ width: 50, margin: 10 }}
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
            />
            <label>Page number:</label>
            <input
                type="number"
                min={1}
                style={{ width: 50, margin: 10 }}
                value={page}
                onChange={(e) => setPage(e.target.value)}
            />
            <button
                disabled={limit < 1 || page < 1}
                onClick={() => {
                    dispatch(fetchProductRequest(limit, (page - 1) * limit))
                }}
            >
                Get products
            </button>
            <div>
                {products.map((product) => (
                    <p key={product.id}>
                        {product.title} - ${product.price}
                    </p>
                ))}
            </div>
        </div>
    )
}
