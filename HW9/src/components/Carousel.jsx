import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../utils/ProductContext'

export const Carousel = ({ title, images, description }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(images)

    const { setProducts, products, selectedProduct, setSelectedProduct } =
        useContext(ProductContext)

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    function deleteImg() {
        setProducts([
            ...products.map((p) => {
                if (p.id === selectedProduct.id) {
                    p.images.splice(currentIndex, 1)
                }
                return p
            }),
        ])
        setSelectedProduct({})
    }

    return (
        <div className="popup-container">
            <h3>{title}</h3>
            {selectedProduct.images.length > 1 && (
                <button onClick={deleteImg}>Delete image</button>
            )}
            <img src={images[currentIndex]} alt={images[currentIndex].title} />

            {images.length > 1 && (
                <>
                    <button onClick={goToPrev} className="carousel-button-left">
                        {'<'}
                    </button>
                    <button
                        onClick={goToNext}
                        className="carousel-button-right"
                    >
                        {'>'}
                    </button>
                </>
            )}
            <p>{description}</p>
        </div>
    )
}
