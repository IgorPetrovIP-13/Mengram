import { ReactNode, useState, FC } from 'react'
import styles from './HeaderButton.module.scss'

interface HeaderButtonProps {
  children: ReactNode;
  func: () => void;
  text: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({ children, func, text }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    func()
    setIsActive(!isActive);
  };

  return (
    <button className={`${styles.mainBtn} ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {children}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};

export default HeaderButton