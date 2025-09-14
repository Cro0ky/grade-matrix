import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span className={styles.title} onClick={() => navigate("/")}>
          Матрица грейдов ССР
        </span>

        <nav className={styles.dropdown}>
          <User />
        </nav>
      </div>
    </header>
  );
};
