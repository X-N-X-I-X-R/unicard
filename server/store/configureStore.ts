import { configureStore } from '@reduxjs/toolkit';
import poolReducer from './actions/poolSlice';
import loggerMiddleware from './loggerMiddleware';

const store = configureStore({
  reducer: {
    pool: poolReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;