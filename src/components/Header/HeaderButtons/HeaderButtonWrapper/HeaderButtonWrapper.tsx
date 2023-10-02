import { ReactNode, useState, FC } from "react";
import styles from "./HeaderButtonWrapper.module.scss";

interface HeaderButtonProps {
  children: ReactNode;
  func: () => void;
  text: string;
}

const HeaderButtonWrapper: FC<HeaderButtonProps> = ({
  children,
  func,
  text,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    func();
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${styles.headerButton} ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
      {!!text && <span className={styles.buttonText}>{text}</span>}
    </button>
  );
};

export default HeaderButtonWrapper;
