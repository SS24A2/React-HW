import { Link } from 'react-router'

export default function Navigation() {
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'row',
                listStyle: 'none',
                gap: 20,
            }}
        >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
        </ul>
    )
}
