import { createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  registrationModal: boolean;
}

const initialState: initialStateType = {
  registrationModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleRegistrationModal: (state) => {
      state.registrationModal = !state.registrationModal;
    },
  },
});
export const { toggleRegistrationModal } = modalSlice.actions;
export default modalSlice.reducer;
