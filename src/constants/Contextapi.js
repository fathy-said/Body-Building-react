import React from "react";
import { createContext, useState } from "react";
let contextID = createContext();

const Contextapi = ({ children }) => {
    const [dataContext, setDataContext] = useState("all");

    return (
        <contextID.Provider value={{ dataContext, setDataContext }}>
            {children}
        </contextID.Provider>
    );
};

export { Contextapi, contextID };
