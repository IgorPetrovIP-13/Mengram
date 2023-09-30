import React, { useEffect, useState } from "react";
import Plus from "./Icons/AddPost.tsx";
import Search from "./Icons/Search.tsx";
import Home from "./Icons/Home.tsx";
import styles from "./IHeader.module.scss";
import HeaderButton from "./HeaderButton/HeaderButton.tsx";
import { Link } from "react-router-dom";

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
      <Link to={"/"}>
        <HeaderButton
          text={displayMode === "desktop" ? "home" : ""}
          func={() => {}}
        >
          <Home
            fill={"white"}
            style={{
              width: "30px",
              height: "30px",
              marginRight: displayMode === "desktop" ? "-6px" : "0",
            }}
          />
        </HeaderButton>
      </Link>
      <HeaderButton
        text={displayMode === "desktop" ? "search" : ""}
        func={() => {}}
      >
        <Search fill={"white"} />
      </HeaderButton>
      <HeaderButton
        text={displayMode === "desktop" ? "create" : ""}
        func={() => {}}
      >
        <Plus fill={"white"} />
      </HeaderButton>
    </header>
  );
};

export default Header;
