import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersRequest } from './../actions/UsersActions'

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.UsersReducer.users)

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchUsersRequest())
        }, 3000)
    }, [dispatch])

    return (
        <div>
            {users.map((i) => (
                <div
                    key={i.id}
                    style={{ border: '1px solid grey', width: 600 }}
                >
                    <p>Name:{i.name}</p>
                    <p>Username:{i.username}</p>
                    <p>email:{i.email}</p>
                </div>
            ))}
        </div>
    )
}
