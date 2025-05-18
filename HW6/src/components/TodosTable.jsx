export default function TodosTable({
    todos,
    areCompletedShown,
    idOfEditedTodo,
    editedTitle,
    setEditedTitle,
    checkTodo,
    deleteTodo,
    editTodo,
    saveEditedTodo,
    cancelEditing,
}) {
    return (
        <>
            {todos.length !== 0 && (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((item) => {
                            if (areCompletedShown ? true : !item.completed)
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            {idOfEditedTodo !== item.id ? (
                                                <span>{item.title}</span>
                                            ) : (
                                                <input
                                                    type="text"
                                                    value={editedTitle}
                                                    onChange={(e) => {
                                                        setEditedTitle(
                                                            e.target.value
                                                        )
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={item.completed}
                                                onChange={() =>
                                                    checkTodo(item.id)
                                                }
                                            />
                                        </td>
                                        <td>
                                            {idOfEditedTodo !== item.id && (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            deleteTodo(item.id)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            editTodo(item)
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                            {idOfEditedTodo === item.id && (
                                                <>
                                                    <button
                                                        onClick={saveEditedTodo}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={cancelEditing}
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
}
