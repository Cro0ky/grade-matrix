import styles from "./sidebar.item.module.scss";
import type { SideBarItemProps } from "@/shared/types/sidebar.types.ts";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

export const SideBarItem: FC<SideBarItemProps> = ({ title, to, icon }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${to}`);
  };
  return (
    <div className={styles.item} onClick={handleNavigate}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
