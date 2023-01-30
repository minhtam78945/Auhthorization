import toast from 'react-hot-toast';

export async function usernameValidate(values) {
    const errros = usernameVerify({}, values);
    return errros;
}
export async function registerValidate(values) {
    const errros = usernameVerify({}, values);
    emailVerify({}, values);
    return errros;
}
function usernameVerify(error = {}, values) {
    const specialChars = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!values.username) {
        error.username = toast.error('UserName Required......!');
    } else if (!values.password) {
        error.password = toast.error('Password Required.......!');
    } else if (values.password.length < 8) {
        error.password = toast.error('Password must be more than 8 char');
        error.password = toast.error('You must be capital letters and letters');
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error('Your Password not strong');
    }
    return error;
}
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email  Required.......!');
    } else if (values.email.include(' ')) {
        error.email = toast.error('Wrong email');
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.password)) {
        error.email = toast.error('Invaild email address......');
    }
}
