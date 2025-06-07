import React, { useState } from 'react';
import './App.css'

export default function Ewan() {
  const [count, setCount] = useState(0)

  const [visible, setVisible] = useState(true)

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)}>
            Click me
        </button>
        <br></br>
        {visible ? <p>Hello</p> : <></>}

        <button onClick={()=> setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>

    </div>
  )
}


