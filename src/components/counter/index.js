import React, {useState} from 'react'




const Counter = ({label = 'Compteur'}) => {
    const [counter, setCounter] = useState(0)
    return(
        <div>
            <h1>{label}</h1>
            <p data-testid="counterValue">{counter}</p>
        <div>
            <button onClick={() => setCounter(counter - 1)} >-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        </div>
    )
}

export default Counter