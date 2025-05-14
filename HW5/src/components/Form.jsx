import { useState } from 'react'
import Input from './Input'
import { useEffect } from 'react'
import Dropdown from './Dropdown'
import Comment from './Comment'

const elements = [
    { value: 'Facebook', name: 'Facebook' },
    { value: 'Instagram', name: 'Instagram' },
    { value: 'SnapChat', name: 'SnapChat' },
]

export default function Form() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('password')
    const [dropdownSelection, setDropdownSelection] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
        console.log(
            `username: ${username} password:${password} media: ${dropdownSelection} comment:${comment} `
        )
    }, [username, password, dropdownSelection, comment])

    return (
        <div id="login">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    alert(
                        `username: ${username} \npassword:${password} \nmedia: ${dropdownSelection} \ncomment:${comment}`
                    )
                }}
            >
                <Input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <Input
                    type={type}
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    onMouseUp={() => {
                        setType('password')
                    }}
                    onMouseDown={() => {
                        setType('text')
                    }}
                    onClick={() => {
                        setType(type === 'password' ? 'text' : 'password')
                    }}
                />
                <Dropdown
                    options={elements}
                    placeholder={'Select social media'}
                    setSelection={setDropdownSelection}
                />
                <Comment comment={comment} setComment={setComment} />
                <button className="action-button" style={{ marginTop: 5 }}>
                    Login
                </button>
            </form>
        </div>
    )
}
