import "./styles/normalize.scss";
import { getRoutes } from "@/app/router/utils/getRoutes.tsx";
import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import { store } from "@/shared/store/store.ts";
import { Header } from "@/widgets";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import styles from "./app.module.scss";

export const Router = () => {
  const myself = useAppSelector(selectMyself);

  return (
    <Routes>
      {getRoutes(myself.role).map((route, index) => (
        <Route {...route} key={index} />
      ))}
    </Routes>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Router />

        <ToastContainer
          limit={3}
          position="bottom-right"
          toastClassName={styles.toast}
          progressClassName={styles.progressBar}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
