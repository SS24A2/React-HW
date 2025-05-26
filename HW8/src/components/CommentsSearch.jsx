import axios from 'axios'
import { useState } from 'react'
import Loader from './Loader'

export default function CommentsSearch() {
    const [postId, setPostId] = useState('')
    const [comments, setComments] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function getCommentsByPostId() {
        setLoading(true)
        try {
            const data = await axios(
                `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            )
            setComments(data.data)
            data.data.length === 0 && setError(true)
        } catch (e) {
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loader />

    return (
        <div>
            <h3>Search Comments by PostId</h3>
            <input
                type="number"
                placeholder="Enter postID"
                value={postId}
                onChange={(e) => {
                    setPostId(e.target.value)
                    setError(false)
                }}
            />
            <button onClick={getCommentsByPostId}>Search</button>
            {error && <p>No comments found for postId {postId}</p>}

            {comments.length > 0 && (
                <div>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>postId</th>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((c) => {
                                return (
                                    <tr key={c.id}>
                                        <td>{c.postId}</td>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>{c.email}</td>
                                        <td>{c.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
