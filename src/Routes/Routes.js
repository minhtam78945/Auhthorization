import Home from '~/Pages/Home';
import Login from '~/Pages/Login';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AuthorProvdier from '~/Context/AuthProvider/AuthorProvider';
import Register from '~/Pages/Register/Register';

const Author = () => {
    return (
        <AuthorProvdier>
            <Outlet />;
        </AuthorProvdier>
    );
};

const router = createBrowserRouter([
    {
        element: <Author />,
        children: [
            {
                element: <Home />,
                path: '/',
            },
            {
                element: <Login />,
                path: '/login',
            },
            {
                element: <Register />,
                path: '/register',
            },
        ],
    },
]);
export default router;
