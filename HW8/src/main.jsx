import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'

import CommentsTable from './components/CommentsTable.jsx'
import CommentsSearch from './components/CommentsSearch.jsx'
import CommentDetails from './components/CommentDetails.jsx'
import NotFound from './components/NotFound.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App />}>
                <Route index element={<Home />} />
                <Route path="comments">
                    <Route index element={<CommentsTable />} />
                    <Route path="search" element={<CommentsSearch />} />
                    <Route path=":id" element={<CommentDetails />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)
