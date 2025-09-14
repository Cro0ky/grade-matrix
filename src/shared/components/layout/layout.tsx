import { Button } from "@/shared/ui/button/button.tsx";
import { Header, Sidebar } from "@/widgets";
import cn from "classnames";
import { UndoIcon } from "lucide-react";
import type { FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./layout.module.scss";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({
  children,
  className,
  title,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <div className={cn(styles.layout, className)} {...props}>
      <Header />
      <Sidebar />
      <div className={styles.head}>
        {title && <span className={styles.title}>{title}</span>}
        <Button
          children={<UndoIcon />}
          className={styles.close_button}
          onClick={() => navigate("/")}
        />
      </div>

      <div className={styles.children}>{children}</div>
    </div>
  );
};
