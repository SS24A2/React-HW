import React from 'react'
import { Link } from 'react-router'
export const Nav = () => {
    return (
        <ul>
            <li>
                <Link to="/">App</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/albums">Albums</Link>
            </li>
        </ul>
    )
}
