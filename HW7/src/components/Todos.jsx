import { useEffect, useState } from 'react'

export default function Todos() {
    const [todos, setTodos] = useState([])

    async function getData() {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        )
        const data = await response.json()
        setTodos(data)
    }

    useEffect(() => {
        getData()
    }, [])

    function checkTodo(id) {
        setTodos([
            ...todos.map((element) => {
                if (element.id === id)
                    return {
                        ...element,
                        completed: !element.completed,
                    }
                return element
            }),
        ])
    }

    if (todos.length === 0) return <h3>Loading</h3>

    return (
        <ul>
            {todos.map((t) => (
                <li key={t.id}>
                    <span>{t.title}</span>
                    <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => checkTodo(t.id)}
                    />
                </li>
            ))}
        </ul>
    )
}
