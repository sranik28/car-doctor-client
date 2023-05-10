import { createContext, useContext } from "react";

const CreateAuth = createContext();

const AuthProvider = ({ children }) => {

    const authData = {};

    return < CreateAuth.Provider value={authData} >
        {children}
    </CreateAuth.Provider >
}

const useAuthData = () => {
    return useContext(CreateAuth)
}

export { AuthProvider, useAuthData }