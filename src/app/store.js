import { configureStore } from '@reduxjs/toolkit';
import Appslice from '../features/Appslice';

export const store = configureStore({
  reducer: {
    app: Appslice,
  },
});
