import React from 'react'

export default function Form() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [birthDate, setBirthDate] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [isShown, setisShown] = React.useState(false)

    return (
        <div
            style={{
                display: 'flex',
                gap: 50,
                margin: 'auto',
                maxWidth: 1000,
                marginTop: 50,
            }}
        >
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 200,
                    gap: 20,
                }}
            >
                <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value)
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label style={{ marginBottom: '-15px' }}>Birth date</label>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => {
                        setBirthDate(e.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => {
                        setPhoneNumber(e.target.value)
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                />
                <button
                    type="button"
                    onClick={() => {
                        setisShown(!isShown)
                    }}
                >
                    {isShown ? 'Hide data' : 'Show data'}
                </button>
            </form>
            {isShown && (
                <table border={1} height={100}>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Birth date</th>
                            <th>Phone number</th>
                            <th>Password</th>
                            <th>Confirm password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{birthDate}</td>
                            <td>{phoneNumber}</td>
                            <td>{password}</td>
                            <td>{confirmPassword}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}
