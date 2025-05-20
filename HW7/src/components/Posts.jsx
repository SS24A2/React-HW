export default function Posts({ posts }) {
    if (posts.length === 0) return <h3>Loading</h3>

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((i) => (
                    <tr key={i.id}>
                        <td>{i.userId}</td>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
