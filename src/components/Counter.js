import React, {useState} from 'react';

function Counter () {
    const[count, setCount]=useState(0)

    return(
        <>
        <input type="number" value={count} onChange={(e)=> setCount(parseInt(e.target.value))}/>        
        <p>{count}</p>
        <button onClick={()=> setCount(count - 1)}>-</button>
        <button onClick={()=> setCount(count + 1)}>+</button>
        </>
    )

}

export default Counter