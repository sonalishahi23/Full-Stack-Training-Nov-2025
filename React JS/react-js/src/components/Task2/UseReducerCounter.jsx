import { useReducer } from "react";

const initialState = {
    count: 0,
    message: ""
};

function reducer(state, action) {

    switch (action.type) {

        case "INCREMENT_1":
            if (state.count >= 10) {
                return {
                    ...state,
                    message: "Maximum value is 10"
                };
            }

            return {
                count: state.count + 1,
                message: ""
            };

        case "DECREMENT_1":
            if (state.count <= 0) {
                return {
                    ...state,
                    message: "Minimum value is 0"
                };
            }

            return {
                count: state.count - 1,
                message: ""
            };

        case "INCREMENT_2":
            if (state.count + 2 > 10) {
                return {
                    ...state,
                    message: "Maximum value is 10"
                };
            }

            return {
                count: state.count + 2,
                message: ""
            };

        case "DECREMENT_2":
            if (state.count - 2 < 0) {
                return {
                    ...state,
                    message: "Minimum value is 0"
                };
            }

            return {
                count: state.count - 2,
                message: ""
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

function UseReducerCounter() {

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div className="counter-container">

            <h1>Counter using useReducer</h1>

            <div className="counter-value">
                {state.count}
            </div>

            <div className="counter-buttons">

                <button
                    onClick={() =>
                        dispatch({ type: "INCREMENT_1" })
                    }
                >
                    Increment By 1
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: "DECREMENT_1" })
                    }
                >
                    Decrement By 1
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: "INCREMENT_2" })
                    }
                >
                    Increment By 2
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: "DECREMENT_2" })
                    }
                >
                    Decrement By 2
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: "RESET" })
                    }
                >
                    Reset
                </button>

            </div>

            {state.message && (
                <p className="counter-message">
                    {state.message}
                </p>
            )}

        </div>
    );
}

export default UseReducerCounter;