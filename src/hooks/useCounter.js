

import { useEffect, useState } from "react";


function useCounter(initialCount) {
    const [counter, setCounter] = useState(initialCount)

    useEffect(() => {
        console.log(counter);
    }, [counter])

    const handleIncrementClick = () => {
        setCounter(counter + 1)
    }

    const handleDecrementClick = () => {
        setCounter(counter - 1)
    }

    return {
        counter,
        handleIncrementClick,
        handleDecrementClick
    }
}

export default useCounter