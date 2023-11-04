"use client";
import React, { useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User,
} from 'firebase/auth';
import firebase_app from '@/firebase/init';
import { getDocument } from '@/firebase/get_data';
import { Icons } from '@/components/icons';
import { useRouter, usePathname } from "next/navigation" 

const auth = getAuth(firebase_app);

interface AuthContextValue {
    user: User | null;
}

export const AuthContext = React.createContext<AuthContextValue>({ user: null });

export const useAuthContext = (): AuthContextValue => React.useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log('Auth has just changed', user)
            if (user) {
               const result = await getDocument('users', user.uid)
               const data = result?.data
               const error = data?.error

               if (error) {
                 return setLoading(false)
               }
               setUser({...user, displayName: data?.displayName})

            } else {
                setUser(null);
            }
            setLoading(false);
        });

        console.log('This is the user', user)

        return () => unsubscribe();
    }, []);

    // useEffect(() => {
    //     if (user == null) router.push("/")
    //   }, [user])

    //   useEffect(() => {
    //     if (user &&  pathName === "/") {
    //         console.log('There is a user, so I am routing to dashboard', pathName)
    //         router.push("/dashboard"); // Replace "dashboard" with the actual route to your dashboard.
    //     }
    // }, [user, pathName]);

    useEffect(() => {
     router.push("/")
    }, [])
    

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? 
            <div
             className="text-my-primary"
             style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
             >
                <Icons.spinner className="h-100 w-100 text-red-600 animate-spin" />
             </div>
             : 
            children}
        </AuthContext.Provider>
    );
};
