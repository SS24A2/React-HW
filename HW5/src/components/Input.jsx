export default function Input({
    type,
    placeholder,
    value,
    onChange,
    name,
    setType,
}) {
    return (
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onMouseUp={() => {
                    name === 'password' && setType('password')
                }}
                onMouseDown={() => {
                    name === 'password' && setType('text')
                }}
            />
            {name === 'password' && (
                <button
                    className="eye-button"
                    type="button"
                    onClick={() => {
                        setType(type === 'password' ? 'text' : 'password')
                    }}
                >
                    <i
                        className={
                            type === 'password'
                                ? 'fa fa-eye-slash'
                                : 'fa fa-eye'
                        }
                    ></i>
                </button>
            )}
        </p>
    )
}
