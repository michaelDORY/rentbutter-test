import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepperState {
  value: number;
}

const initialState: StepperState = {
  value: 1,
};

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { setValue, increment, decrement } = stepperSlice.actions;

export default stepperSlice.reducer;
