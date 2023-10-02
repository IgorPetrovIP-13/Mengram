import Search from "./HeaderButtons/Search.tsx";
import Home from "./HeaderButtons/Home.tsx";
import styles from "./IHeader.module.scss";
import { Link } from "react-router-dom";
import AddPostIcon from "./HeaderButtons/AddPostIcon.tsx";
import Profile from "./HeaderButtons/Profile/Profile.tsx";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={"/"}>
        <img
          className={styles.logoIconDesktop}
          src="/title.png"
          alt="Mengram"
        />
        <img
          className={styles.logoIcon}
          src="/logo-abstarct.png"
          alt="Mengram"
        />
      </Link>
      <Home />
      <Search />
      <AddPostIcon />
      <Profile />
    </header>
  );
};

export default Header;
