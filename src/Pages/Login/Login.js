import { Button } from '@mui/material';
import classNames from 'classnames/bind';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '~/Context/AuthProvider/AuthorProvider';
import { usernameValidate } from '~/Helper/validate';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);
function Login() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log(values);
        },
    });
    //Login with google
    const auth = getAuth();
    const navigate = useNavigate();
    const { user } = useContext(AuthorContext);
    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log({ res });
    };
    if (user.uid) {
        navigate('/');
        return;
    }

    return (
        <div className="conatiner mx-auto">
            <Toaster position="right-top" reverseOrder={false}></Toaster>
            <div className="flex justify-center items-center h-screen">
                <div className={cx('glass')}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold mb-5">Welcome Back</h4>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col justify-center items-center gap-6 ">
                            <input
                                {...formik.getFieldProps('username')}
                                className={cx('textblox')}
                                type="text"
                                placeholder="Enter your Usernames"
                            />
                            <input
                                {...formik.getFieldProps('password')}
                                className={cx('textblox')}
                                type="password"
                                placeholder="Enter your Password"
                            />
                            <button className={cx('btn')} type="submit">
                                Login
                            </button>
                            <div>
                                <Button onClick={handleGoogle}>Login with Google</Button>
                            </div>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-5">
                                Not a nemeber
                                <Link className="text-red-500 ml-5" to="/register">
                                    Register
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
