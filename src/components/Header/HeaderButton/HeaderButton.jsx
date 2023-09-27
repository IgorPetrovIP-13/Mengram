import styles from './HeaderButton.module.scss';
import { useState } from 'react';

const HeaderButton = ({children, func, text}) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
        <button className={`${styles.mainBtn} ${isActive ? 'active' : ''}`} onClick={func}>
            {children}
            <span className={styles.buttonText}>{text}</span>
        </button>
    )
}

export default HeaderButton;