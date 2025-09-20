import { AuthorizationTabs } from "@/pages/authorization/components/authorization-tabs.tsx";
import { Layout } from "@/shared/components";
import { Login, Registration } from "@/shared/components/authorization";
import type { TAuthorizationState } from "@/shared/types/types.ts";
import { useState } from "react";

import styles from "./authorization.module.scss";

export const Authorization = () => {
  const [authorizationState, setAuthorizationState] =
    useState<TAuthorizationState>("login");

  const handleChangeTab = (tab: TAuthorizationState) => {
    setAuthorizationState(tab);
  };

  return (
    <Layout
      className={styles.layout}
      title={"Войдите в аккаунт"}
      isShowCloseButton={false}
    >
      <AuthorizationTabs
        onChangeTab={handleChangeTab}
        authorizationState={authorizationState}
      />
      <div className={styles.wrapper}>
        {authorizationState === "login" ? <Login /> : <Registration />}
      </div>
    </Layout>
  );
};
