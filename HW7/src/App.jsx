import { Routes, Route } from 'react-router'
import Posts from './components/Posts'
import Todos from './components/Todos'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react'

export default function App() {
    const [posts, setPosts] = useState([])

    async function getData() {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        )
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h2>App</h2>
            <Navigation />
            <Routes>
                <Route path="/" element={<h2>Select todos or posts</h2>} />
                <Route path="/posts" element={<Posts posts={posts} />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
