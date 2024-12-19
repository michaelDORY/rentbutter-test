import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from './slices/stepperSlice';

const store = configureStore({
  reducer: {
    stepper: stepperReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
