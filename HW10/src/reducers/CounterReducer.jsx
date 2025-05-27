const initialCount = 0

export default function CounterReducer(state = initialCount, action) {
    if (action.type === 'counterIncrement') {
        return state + 1
    } else if (action.type === 'counterDecrement') {
        return state - 1
    } else {
        return state
    }
}
