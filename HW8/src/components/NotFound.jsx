import { Link } from 'react-router'

export default function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}
