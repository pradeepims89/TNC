import React, { useState } from 'react'
function HookCounter() {
    const [state, setState] = useState(0)
    return (
        <div>
            <h1>React Hooks</h1>
            <button onClick={() =>setState(state + 1)}>Counter{state}</button>
        </div>
    )
}

export default HookCounter

