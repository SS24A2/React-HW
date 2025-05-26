import { Outlet } from 'react-router'
import Navigation from './components/Navigation'
import './style.css'

export default function App() {
    return (
        <div>
            <header>
                <h1>App</h1>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
