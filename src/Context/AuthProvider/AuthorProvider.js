import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
export const AuthorContext = createContext();
function AuthorProvdier({ children }) {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
        const unsubrice = auth.onIdTokenChanged((user) => {
            if (user?.uid) {
                setUser(user);
                localStorage.setItem('accessToken', user.accessToken);
                return;
            }
            //not user
            setUser({});
            localStorage.clear();
            navigate('/login');
        });
        return () => {
            unsubrice();
        };
    }, [auth]);
    return <AuthorContext.Provider value={{ user, setUser }}>{children}</AuthorContext.Provider>;
}

export default AuthorProvdier;
