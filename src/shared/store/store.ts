import { skillsApi } from "@/shared/store/api/skills-api.ts";
import { modalsReducer } from "@/shared/store/slices/modals.slice.ts";
import { myselfReducer } from "@/shared/store/slices/myself.slice.ts";
import { skillsReducer } from "@/shared/store/slices/skills.slice.ts";
import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./api/user-api.ts";

export const store = configureStore({
  reducer: {
    myself: myselfReducer,
    modals: modalsReducer,
    skills: skillsReducer,
    [userApi.reducerPath]: userApi.reducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(skillsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
