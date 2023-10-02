import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import HeaderButtonWrapper from "../HeaderButtonWrapper/HeaderButtonWrapper";

export default function Profile(): ReactElement {
  return (
    <Link to={"/"}>
      <HeaderButtonWrapper text="Profile" func={() => {}}>
        <img className={styles.ProfileIconImg} src="/profile-pic.jpg" alt="" />
      </HeaderButtonWrapper>
    </Link>
  );
}
