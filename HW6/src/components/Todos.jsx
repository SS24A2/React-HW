import { useState } from 'react'
import TodosTable from './TodosTable'

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [areCompletedShown, setAreCompletedShown] = useState(true)
    const [idOfEditedTodo, setIdOfEditedTodo] = useState(null)
    const [editedTitle, setEditedTitle] = useState('')

    function addNewTodo() {
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                {
                    id: Date.now().toString(),
                    title: newTodo,
                    completed: false,
                },
            ])
            setNewTodo('')
        } else {
            alert(
                'No title has been entered\nPlease enter a title to add a TODO'
            )
        }
    }

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

    function deleteTodo(id) {
        setTodos(todos.filter((element) => element.id !== id))
    }

    function editTodo(item) {
        setIdOfEditedTodo(item.id)
        setEditedTitle(item.title)
    }

    function saveEditedTodo() {
        if (editedTitle.trim() !== '') {
            setTodos([
                ...todos.map((t) => {
                    if (t.id === idOfEditedTodo)
                        return {
                            ...t,
                            title: editedTitle,
                        }
                    return t
                }),
            ])
            setIdOfEditedTodo(null)
            setEditedTitle('')
        }
    }

    function cancelEditing() {
        setIdOfEditedTodo(null)
        setEditedTitle('')
    }

    return (
        <div style={{ margin: '20px 50px' }}>
            <div>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={newTodo}
                    onChange={(e) => {
                        setNewTodo(e.target.value)
                    }}
                />
                <button onClick={addNewTodo}>Add new todo</button>
            </div>
            {todos.length !== 0 && (
                <p>{`Number of completed todos:${
                    todos.filter((todo) => todo.completed).length
                }`}</p>
            )}
            {todos.length !== 0 && (
                <button
                    onClick={() => {
                        setAreCompletedShown(!areCompletedShown)
                    }}
                >
                    {areCompletedShown ? 'Hide completed' : 'Show completed'}
                </button>
            )}
            <TodosTable
                todos={todos}
                areCompletedShown={areCompletedShown}
                idOfEditedTodo={idOfEditedTodo}
                editedTitle={editedTitle}
                setEditedTitle={setEditedTitle}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                saveEditedTodo={saveEditedTodo}
                cancelEditing={cancelEditing}
            />
        </div>
    )
}
