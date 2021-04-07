import React, { useMemo, useState } from "react"
import "./useMemo.css"


const wait = () => {
    const futureDate = Date.now() + 2000
    while (Date.now() < futureDate) { }
}

const sum = (a, b) => {
    wait()
    return a + b
}

const UseMemo = () => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const result = useMemo(() => {
        if (n1 || n2)
            return sum(n1, n2)
    }, [n1, n2])

    return (
        <div className="page use-memo">
            <h2>useMemo(fn, denpList)</h2>

            <h3>wait...</h3>
            <input
                type="number" value={n1}
                onChange={
                    e => setN1(parseInt(e.target.value))}
            />
            <h3>wait...</h3>
            <input
                type="number" value={n2}
                onChange={
                    e => setN2(parseInt(e.target.value))}
            />
            <h3>no wait</h3>
            <input
                type="number" value={n3}
                onChange={
                    e => setN3(parseInt(e.target.value))}
            />
            <span className="result">{result}</span>
        </div>
    )
}

export default UseMemo