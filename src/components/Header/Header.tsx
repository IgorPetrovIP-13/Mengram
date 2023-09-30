import Search from "./HeaderIcons/Search.tsx";
import Home from "./HeaderIcons/Home.tsx";
import styles from "./IHeader.module.scss";
import { Link } from "react-router-dom";
import AddPost from "./HeaderIcons/AddPost.tsx";

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
      <AddPost />
    </header>
  );
};

export default Header;
