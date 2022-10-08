import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './slices/general';

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

