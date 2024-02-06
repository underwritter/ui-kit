import {configureStore} from "@reduxjs/toolkit";
import {dadataApi} from "./api/dadata.api";

export const store = configureStore({
  reducer: {
    [dadataApi.reducerPath]: dadataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dadataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
