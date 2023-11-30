import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;
    const [isUserInfo, setIsUserInfo] = useState(false);

    return (
        <UserContext.Provider value={{ isUserInfo, setIsUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}