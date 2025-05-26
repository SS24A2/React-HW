import { Link } from 'react-router'

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link to="">Home</Link>
            </li>
            <li>
                <Link to="comments">Comments</Link>
            </li>
        </ul>
    )
}
