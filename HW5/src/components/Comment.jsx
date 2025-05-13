import { useEffect } from 'react'
import { useState } from 'react'

export default function Comment({ comment, setComment }) {
    const [isMultiline, setIsMultiline] = useState(false)

    return (
        <p>
            {!isMultiline ? (
                <input
                    style={{ marginTop: 15, marginBottom: 10 }}
                    type="text"
                    placeholder="Enter comment"
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                />
            ) : (
                <textarea
                    style={{ resize: 'none', marginTop: 10, marginBottom: 5 }}
                    rows="4"
                    cols="26"
                    placeholder="Enter comment"
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                />
            )}
            {!isMultiline && (
                <button
                    style={{ cursor: 'pointer' }}
                    type="button"
                    onClick={() => {
                        setIsMultiline(true)
                    }}
                >
                    <i className="fa fa-expand"></i>
                </button>
            )}
        </p>
    )
}
