import { configureStore } from '@reduxjs/toolkit';
import prestationsSliceReducer from './features/prestationsSlice';

const store = configureStore({
  reducer: {
    prestations: prestationsSliceReducer,
  },
});

export default store;
