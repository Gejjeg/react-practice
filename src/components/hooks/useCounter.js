import { useState, useCallback } from "react"

export function useCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    const counterIncrement = useCallback(() => {
        setCounter((c) => c + 1)
    }, [])

    const counterDecrement = useCallback(() => {
        setCounter((c) => c - 1)
    }, [])

    const counterReset = useCallback(() => {
        setCounter(initialValue)
    }, [initialValue])

    return [
        counter,
        counterIncrement,
        counterDecrement,
        counterReset
    ]
}
