import { Button } from "@/shared/ui/button/button.tsx";
import { useGetToken } from "@/shared/utils/useGetToken.ts";
import { Header, Sidebar } from "@/widgets";
import cn from "classnames";
import { UndoIcon } from "lucide-react";
import type { FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./layout.module.scss";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  isShowCloseButton?: boolean;
}

export const Layout: FC<LayoutProps> = ({
  isShowCloseButton = true,
  children,
  className,
  title,
  ...props
}) => {
  const navigate = useNavigate();
  const { token } = useGetToken();
  return (
    <div className={cn(styles.layout, className)} {...props}>
      <Header />
      {token && <Sidebar />}
      <div className={styles.head}>
        {title && <span className={styles.title}>{title}</span>}
        {isShowCloseButton && (
          <Button
            children={<UndoIcon />}
            className={styles.close_button}
            onClick={() => navigate("/")}
          />
        )}
      </div>

      <div className={styles.children}>{children}</div>
    </div>
  );
};
