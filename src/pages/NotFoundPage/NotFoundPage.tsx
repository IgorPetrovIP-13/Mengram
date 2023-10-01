import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <h2>Page not found :(</h2>
      <img src="/cat_cable.png"></img>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
