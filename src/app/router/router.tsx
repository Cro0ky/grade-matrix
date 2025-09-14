import { getRoutes } from "@/app/router/utils/getRoutes.tsx";
import { useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { selectMyself } from "@/shared/store/selectors/myself.selector.ts";
import { Route, Routes } from "react-router-dom";

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
