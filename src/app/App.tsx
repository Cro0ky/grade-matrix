import "./styles/normalize.scss";
import { Router } from "@/app/router/router.tsx";
import { store } from "@/shared/store/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import styles from "./app.module.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
