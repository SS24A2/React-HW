import React from 'react'
import Hello from './components/Hello'
import { HelloFunc } from './components/HelloFunc'
import Counter from './components/Counter'

export function App() {
    return (
        <div id="app">
            <h2>App</h2>
            {/* <HelloFunc /> */}
            <Counter />
        </div>
    )
}
