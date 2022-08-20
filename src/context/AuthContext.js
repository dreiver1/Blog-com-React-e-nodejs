import  { createContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function Authprovider ({children}){
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    function login (email, password) {
         console.log("Login aqui", email, password)
         setUser({id: "123", email})
    }

    const logaut = ()=>{
        console.log("Logaut")
    }
    return(
        <AuthContext.Provider value={{
            authenticated: false, 
            user: user, 
            login, 
            logaut
        }}>

           { children } 
        </AuthContext.Provider>
    )
    
};

