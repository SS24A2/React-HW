import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Cake } from './components/Cake.jsx'
import { Product } from './components/Product.jsx'
import { Comments } from './components/Comments'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.jsx'
import Users from './components/Users.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/cake" element={<Cake />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/users" element={<Users />} />
                </Route>
            </Routes>
        </Router>
    </Provider>
)
