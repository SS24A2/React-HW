export default function Dropdown({ options, title, selection, setSelection }) {
    return (
        <select
            defaultValue={title}
            style={{ width: 150 }}
            onChange={(e) => {
                console.log(e.target.value)
                console.log(selection)
                setSelection(e.target.value)
            }}
        >
            <option disabled>{title}</option>
            {options.map((object, i) => (
                <option key={i} name={object.name} value={object.value}>
                    {object.value}
                </option>
            ))}
        </select>
    )
}
