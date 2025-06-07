import React, { useState } from 'react';

export default function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [result, setResult] = useState(0);

    const compute = () => {
        setResult((input1 * 0.3) + (input2*0.3) + (input3*0.4));
    }

    return (
        <>
            <p>Grades Calculator</p>
            Quizzes: <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)}></input>
            <br/>
            Lab Activity: <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)}></input>
            <br/>
            Final Exam: <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)}></input>
            <br/>
            Final Score: <input type="text" value={result}></input>
            <br/>
            Final Grade: <input type="text" value={''}></input>
            <button onClick={compute}>Add</button>
        </>
    );
}