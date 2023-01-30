import classNames from 'classnames/bind';
import styles from './GlobleStyle.module.scss';
const cx = classNames.bind(styles);
function GlobleStyle({ children }) {
    return { children };
}

export default GlobleStyle;
