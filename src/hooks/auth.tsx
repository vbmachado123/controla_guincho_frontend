import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
    children? : ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: ReactNode; }) {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@controla-guincho:logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if (email === 'admin' && password === '123') {
            localStorage.setItem('@controla-guincho:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuário inválidos!');
        }
    };

    const signOut = () => {
        localStorage.removeItem('@controla-guincho:logged');
        setLogged(false);
    };

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };