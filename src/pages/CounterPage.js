import { useReducer } from "react";
import Button from "../components/Button";
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'change_value_to_add'
const SUBMIT_FORM = 'submit'

const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case DECREMENT_COUNT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case SUBMIT_FORM:
            return {
                ...state,
                counter: state.counter + state.valueToAdd,
                valueToAdd: 0
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        default:
            return state;
    }
}

function CounterPage({ initialCount }) {
    // const [counter, setCounter] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)

    const [state, dispatch] = useReducer(reducer, {
        counter: initialCount,
        valueToAdd: 0,
    })

    const handleIncrementClick = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const handleDecrementClick = () => {
        // setCounter(counter - 1)
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: SUBMIT_FORM,

        })
        // setCounter(counter + valueToAdd)
        // setValueToAdd('')

    }

    const handleChange = (e) => {

        const value = parseInt(e.target.value) || 0
        // setValueToAdd(value)

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Current count is: {state.counter}</h1>
            <div className="flex flex-row">
                <Button secondary onClick={handleIncrementClick}>Increment</Button>
                <Button secondary onClick={handleDecrementClick}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot: </label>
                <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" onChange={handleChange} value={state.valueToAdd || ''} />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage