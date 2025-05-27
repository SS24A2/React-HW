import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actions/CounterActions'
import { useEffect } from 'react'

export default function Counter() {
    const count = useSelector((state) => state.CounterReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(increment())
        dispatch(decrement())
        dispatch(decrement())
    }, [])

    return <div>{count}</div>
}
