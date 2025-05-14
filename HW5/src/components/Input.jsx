export default function Input({
    type,
    placeholder,
    value,
    onChange,
    name,
    onMouseUp,
    onMouseDown,
    onClick,
}) {
    return (
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
            />
            {name === 'password' && (
                <button className="eye-button" type="button" onClick={onClick}>
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
