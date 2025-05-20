import { Link } from 'react-router'

export default function NotFound() {
    return (
        <div>
            <div>Error, no routes match this URL</div>
            <span>
                <Link to="/">Go Back</Link>
            </span>
        </div>
    )
}
