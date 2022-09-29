import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [boolean, setBoolean] = useState(true)


    return (
        <AppContext.Provider value={{boolean, setBoolean}}>{children}</AppContext.Provider>
    )
}