import { configureStore } from "@reduxjs/toolkit";
import { hpApi } from "./hpApi";

export const store = configureStore({
  reducer: {
    [hpApi.reducerPath]: hpApi.reducer,
  },
  middleware: (getDefaultMeddleware) =>
    getDefaultMeddleware().concat(hpApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
