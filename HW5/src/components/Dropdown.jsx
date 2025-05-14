export default function Dropdown({ options, placeholder, setSelection }) {
    return (
        <select
            defaultValue={placeholder}
            style={{ width: 150 }}
            onChange={(e) => {
                setSelection(e.target.value)
            }}
        >
            <option disabled>{placeholder}</option>
            {options.map((object, i) => (
                <option key={i} value={object.value}>
                    {object.value}
                </option>
            ))}
        </select>
    )
}
