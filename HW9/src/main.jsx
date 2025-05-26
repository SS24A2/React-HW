import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Home } from './components/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route path=":selection" element={<Home />} />
            </Route>
        </Routes>
    </Router>
)
