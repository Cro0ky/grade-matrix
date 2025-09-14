import { modalsReducer } from "@/shared/store/slices/modals.slice.ts";
import { myselfReducer } from "@/shared/store/slices/myself.slice.ts";
import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./api/user-api.ts";

export const store = configureStore({
  reducer: {
    myself: myselfReducer,
    modals: modalsReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
