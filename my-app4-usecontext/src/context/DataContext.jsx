import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({ children }) => {
    let [data, setData] = useState("Aniket")
    let [status, setStatus] = useState(123)
    return (
        <DataContext.Provider value={{ data, status, setData,setStatus }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

export const useData = () => { return useContext(DataContext) }   