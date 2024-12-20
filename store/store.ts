import { configureStore } from '@reduxjs/toolkit';

import stepperReducer from './slices/stepperSlice';

export const makeStore = () => {
  return configureStore({
    reducer: { stepper: stepperReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
