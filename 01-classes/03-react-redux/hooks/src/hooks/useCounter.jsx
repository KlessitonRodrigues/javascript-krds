import React from "react"

function useCounter(initialValue = 100) {
    const [counter, setCounter] = React.useState(initialValue)

    function inc(num) {
        setCounter(counter + num)
    }

    function dec(num) {
        setCounter(counter - num)
    }

    return [counter, inc, dec]
}

export default useCounter