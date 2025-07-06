import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

const login = async (input) => {
    try {
        const res = await axios.post('http://localhost:8800/auth/login', {
            username: input.username,
            password: input.password
        });

        if (res.status === 200) {
            let user = res.data.user;
            if (user) {
                setCurrentUser(res.data.user);
            }
            console.log(res);

        }

        return res;

    } catch (err) {
        console.error("Errore durante il login:", err);
        throw err; // per gestire l'errore nel componente
    }
};

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    const logout = async () => {
        await axios.post('http://localhost:8800/auth/logout');
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}