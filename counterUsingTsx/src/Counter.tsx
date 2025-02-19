import { useState, useRef } from "react";

function Counter() {
    const [time, setTime] = useState(0);
    const timer = useRef(null);

    const handleClick = () => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
    };

    const handleReset = () => {
        setTime(0);
    };

    const handleStop = () => {
        clearInterval(timer.current);
        timer.current = null;
    };

    return (
        <>
            <h1>Timer</h1>
            <h2>{time}</h2>
            <button onClick={handleClick}>Start</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default Counter;
