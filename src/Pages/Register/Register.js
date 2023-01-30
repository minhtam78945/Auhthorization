import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import convertBase64 from '~/Helper/convert';
import images from '~/assets/images';
import { usernameValidate } from '~/Helper/validate';
import styles from './Register.module.scss';
const cx = classNames.bind(styles);
function Register() {
    const [file, setFile] = useState();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            values = await Object.assign(values, { profile: file || '' });
            console.log(values);
        },
    });
    const onUpload = async (e) => {
        const base64 = await convertBase64(e.target.files[0]);
        setFile(base64);
    };
    return (
        <div className="conatiner mx-auto">
            <Toaster position="right-top" reverseOrder={false}></Toaster>
            <div className="flex justify-center items-center h-screen">
                <div className={cx('glass')} style={{ width: '45%' }}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold mb-5">Register</h4>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="flex justify-center py-4">
                            <label htmlFor="profile">
                                <img src={file || images.noImage} alt="avatar" className={cx('profile-image')} />
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-6 ">
                            <input
                                {...formik.getFieldProps('email')}
                                className={cx('textblox')}
                                type="email"
                                placeholder="Enter your Email"
                            />
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
                                Create a account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
