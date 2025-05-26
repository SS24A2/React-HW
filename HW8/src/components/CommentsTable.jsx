import { Link } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function CommentsTable() {
    const [comments, setComments] = useState([])

    async function deleteComment(id) {
        try {
            const response = await axios.delete(
                `https://jsonplaceholder.typicode.com/comments/${id}`
            )
            alert(response.status)
            setComments(comments.filter((c) => c.id !== id))
        } catch (e) {
            alert(e.message)
        }
    }

    useEffect(() => {
        async function getComments() {
            try {
                const data = await axios(
                    'https://jsonplaceholder.typicode.com/comments'
                )
                setComments(data.data)
            } catch (e) {
                alert(e.message)
            }
        }
        getComments()
    }, [])

    if (comments.length === 0) return <Loader />
    if (comments.length > 0)
        return (
            <div>
                <button>
                    <Link to="search">Search comments by postId</Link>
                </button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                            <th>delete</th>
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
                                    <td>
                                        <span>{c.body.substring(0, 100)}</span>
                                        <span>
                                            <Link to={`${c.id}`}>...More</Link>
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                deleteComment(c.id)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
}
