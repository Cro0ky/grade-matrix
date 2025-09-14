import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import { getFullNameInitials } from "@/shared/utils/getFullnameInitials.ts";
import { useNavigate } from "react-router-dom";

import styles from "./header.module.scss";

export const Header = () => {
  const { surname, name, patronymic, id } = useAppSelector(selectMyself);
  const navigate = useNavigate();

  const links = [
    {
      to: `/skills`,
      content: "Информация о категориях",
    },
    {
      to: `/profile/${id}`,
      content: getFullNameInitials(surname, name, patronymic),
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span className={styles.title} onClick={() => navigate("/")}>
          Матрица Грейдов
        </span>

        <nav className={styles.links}>
          {links.map(({ to, content }, index) => (
            <span
              onClick={() => navigate(to)}
              key={index}
              className={styles.link}
            >
              {content}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};
