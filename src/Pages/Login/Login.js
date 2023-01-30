import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { AuthorContext } from '~/Context/AuthProvider/AuthorProvider';
import { Button } from '@mui/material';
const cx = classNames.bind(styles);
function Login() {
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
            <div className="flex justify-center items-center h-screen">
                <div className={cx('glass')}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold mb-5">Welcome Back</h4>
                    </div>
                    <form className="py-1">
                        <div className="flex flex-col justify-center items-center gap-6 ">
                            <input className={cx('textblox')} type="text" placeholder="Enter your Usernames" />
                            <input className={cx('textblox')} type="password" placeholder="Enter your Password" />
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
