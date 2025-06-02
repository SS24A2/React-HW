import { Link } from 'react-router'
import './../css/Nav.css'
export const Nav = () => {
    return (
        <ul id="nav">
            <li>
                <Link to="/">App</Link>
            </li>
            <li>
                <Link to="/cake">Cake</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    )
}
