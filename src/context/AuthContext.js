import {createContext, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export function AuthProvider ( { children } ){
    const [user, setUser] = useState(null)
    // const navigate = useNavigate({})

    function login (email, password) {
        console.log("Login aqui", email, password)
        if(password === "secret"){
            setUser({id: "123", email})
        }
    }
    
    const logaut = ()=>{
        console.log("Logaut")
        setUser(null);
    //    navigate("./login")
    }
    
    const state = {
        authenticated: !!user, 
        user: user, 
        login, 
        logaut
    }
    
    return(
        <AuthContext.Provider value={state}>
           { children } 
        </AuthContext.Provider>
    )
    
};

