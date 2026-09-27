import { useState } from "react";

function UseStateCounter() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const incrementBy1 = () => {
        if (count < 10) {
            setCount(count + 1);
            setMessage("");
        } else {
            setMessage("Maximum value is 10");
        }
    };

    const decrementBy1 = () => {
        if (count > 0) {
            setCount(count - 1);
            setMessage("");
        } else {
            setMessage("Minimum value is 0");
        }
    };

    const incrementBy2 = () => {
        if (count + 2 <= 10) {
            setCount(count + 2);
            setMessage("");
        } else {
            setMessage("Maximum value is 10");
        }
    };

    const decrementBy2 = () => {
        if (count - 2 >= 0) {
            setCount(count - 2);
            setMessage("");
        } else {
            setMessage("Minimum value is 0");
        }
    };

    const reset = () => {
        setCount(0);
        setMessage("");
    };

    return (
        <div className="counter-container">

            <h1>Counter using useState</h1>

            <div className="counter-value">
                {count}
            </div>

            <div className="counter-buttons">

                <button onClick={incrementBy1}>
                    Increment By 1
                </button>

                <button onClick={decrementBy1}>
                    Decrement By 1
                </button>

                <button onClick={incrementBy2}>
                    Increment By 2
                </button>

                <button onClick={decrementBy2}>
                    Decrement By 2
                </button>

                <button onClick={reset}>
                    Reset
                </button>

            </div>

            {message && (
                <p className="counter-message">
                    {message}
                </p>
            )}

        </div>
    );
}

export default UseStateCounter;