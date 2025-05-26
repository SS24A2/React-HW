import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import Loader from './Loader'

export default function CommentDetails() {
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

    const [commentData, setCommentData] = useState(null)
    const [editComment, setEditComment] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getCommentByID() {
            setLoading(true)
            try {
                const data = await axios(
                    `https://jsonplaceholder.typicode.com/comments/${id}`
                )
                setCommentData(data.data)
            } catch (e) {
                alert(e.message)
            } finally {
                setLoading(false)
            }
        }
        getCommentByID()
    }, [])

    function editingComment() {
        setEditComment(commentData)
    }

    async function saveEditedComment() {
        setLoading(true)
        try {
            const response = await axios({
                method: 'put',
                url: `https://jsonplaceholder.typicode.com/comments/${id}`,
                data: {
                    ...editComment,
                },
            })
            setCommentData({ ...editComment })
            setEditComment(null)
            alert(`response status: ${response.status}`)
            if (response.status === 200) navigate('/comments')
        } catch (e) {
            setEditComment(null)
            alert(e.message)
            setErrorMsg(e.message)
        } finally {
            setLoading(false)
        }
    }

    function cancelEditing() {
        setEditComment(null)
    }

    if (loading) return <Loader />

    if (!editComment && commentData)
        return (
            <div>
                <h4>Comment Details</h4>
                <p>Name:{commentData.name}</p>
                <p>Email:{commentData.email}</p>
                <p>Body:{commentData.body}</p>
                <button onClick={editingComment}>Edit</button>
                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
            </div>
        )

    if (editComment)
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 400,
                    gap: 10,
                }}
            >
                <h4>Comment Details</h4>
                <input
                    type="text"
                    value={editComment.name}
                    onChange={(e) => {
                        if (e.target.value.trim() !== '')
                            setEditComment({
                                ...editComment,
                                name: e.target.value,
                            })
                    }}
                />
                <input
                    type="text"
                    value={editComment.email}
                    onChange={(e) => {
                        if (e.target.value.trim() !== '')
                            setEditComment({
                                ...editComment,
                                email: e.target.value,
                            })
                    }}
                />
                <textarea
                    rows={10}
                    value={editComment.body}
                    onChange={(e) => {
                        if (e.target.value.trim() !== '')
                            setEditComment({
                                ...editComment,
                                body: e.target.value,
                            })
                    }}
                />

                <div>
                    <button onClick={saveEditedComment}>Save</button>
                    <button onClick={cancelEditing}>Cancel</button>
                </div>
            </div>
        )
}
