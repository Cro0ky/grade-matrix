import type { TAuthorizationState } from "@/shared/types/types.ts";
import cn from "classnames";
import { type FC } from "react";

import styles from "./authorization-tabs.module.scss";

interface AuthorizationTabProps {
  onChangeTab: (value: TAuthorizationState) => void;
  authorizationState: TAuthorizationState;
}

export const AuthorizationTabs: FC<AuthorizationTabProps> = ({
  onChangeTab,
  authorizationState,
}) => {
  const tabs = [
    {
      tabName: "Логин",
      id: "login",
      onClick: () => onChangeTab("login"),
    },
    {
      tabName: "Регистрация",
      id: "registration",
      onClick: () => onChangeTab("registration"),
    },
  ];

  return (
    <div className={styles.head}>
      <div className={styles.tabs}>
        {tabs.map(({ tabName, onClick, id }, index) => (
          <div
            className={cn(styles.tab, {
              [styles.isActive]: id === authorizationState,
            })}
            onClick={onClick}
            key={index}
          >
            {tabName}
          </div>
        ))}
      </div>

      <div
        className={cn(styles.line, {
          [styles.isActiveLine]: authorizationState === "registration",
        })}
      />
    </div>
  );
};
