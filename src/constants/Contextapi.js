import React from "react";
import { createContext, useState } from "react";
let contextID = createContext();

const Contextapi = ({ children }) => {
    const [dataContext, setDataContext] = useState("all");
    const [getSearchContext, setSearchContext] = useState();

    return (
        <contextID.Provider value={{
            dataContext,
            setDataContext,
            getSearchContext,
            setSearchContext
        }}>
            {children}
        </contextID.Provider>
    );
};

export { Contextapi, contextID };
