import { useState } from 'react'

export default function Comment({ comment, setComment }) {
    const [isMultiline, setIsMultiline] = useState(false)

    return (
        <p>
            {!isMultiline ? (
                <input
                    style={{
                        marginTop: 15,
                        marginBottom: 10,
                        position: 'relative',
                    }}
                    type="text"
                    placeholder="Enter comment"
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                />
            ) : (
                <textarea
                    style={{
                        resize: 'none',
                        marginTop: 10,
                        marginBottom: 5,
                        position: 'relative',
                    }}
                    rows="4"
                    cols="26"
                    placeholder="Enter comment"
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                />
            )}
            <button
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    bottom: 12,
                    right: 1,
                    border: 'none',
                    backgroundColor: 'white',
                }}
                type="button"
                onClick={() => {
                    setIsMultiline(!isMultiline)
                }}
            >
                <i
                    className={!isMultiline ? 'fa fa-expand' : 'fa fa-compress'}
                ></i>
            </button>
        </p>
    )
}
