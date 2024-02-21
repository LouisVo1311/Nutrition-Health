import { useState, useEffect } from "react"

function useDebounce(value, delay) {
    const [debounceValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(handle)

    }, [value])

    return debounceValue;
}

export default useDebounce