import React, { useEffect, useState } from "react";
import Search from "./Icons/Search.tsx";
import Home from "./Icons/Home.tsx";
import styles from "./IHeader.module.scss";
import { Link } from "react-router-dom";
import AddPost from "./Icons/AddPost.tsx";

enum DisplayMode {
  Desktop = "desktop",
  Laptop = "laptop",
  Phone = "phone",
}

const Header: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    computeInitialDisplayMode()
  );

  function computeInitialDisplayMode() {
    if (window.innerWidth < 1201) {
      return DisplayMode.Laptop;
    } else if (window.innerWidth < 769) {
      return DisplayMode.Phone;
    } else {
      return DisplayMode.Desktop;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setDisplayMode(DisplayMode.Laptop);
      } else if (window.innerWidth < 769) {
        setDisplayMode(DisplayMode.Phone);
      } else {
        setDisplayMode(DisplayMode.Desktop);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={"/"}>
        <img
          src={displayMode === "desktop" ? "/title.png" : "/logo-abstarct.png"}
          alt="Mengram"
        />
      </Link>
      <Home displayMode={displayMode} />
      <Search displayMode={displayMode} />
      <AddPost />
    </header>
  );
};

export default Header;
