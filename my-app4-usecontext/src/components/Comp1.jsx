import React from 'react'
import { useData } from '../context/DataContext'

const Comp1 = () => {
    let { data, status, setData ,setStatus} = useData()
    return (
        <div>
            <h1>this is component 1</h1>
            <ul>
                <li>{data}</li>
                <li>{status}</li>
            </ul>
            <button onClick={() => { setStatus (prev => prev + 1) }}>Click</button>
        </div>
    )
}
export default Comp1